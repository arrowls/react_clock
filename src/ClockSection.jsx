import City from "city-timezones";
import {useEffect, useState} from "react";
import Clock from "./Clock";

export default function ClockSection({setCity, setIsSelected, city, onClockHover, onClockLeave}) {
    const [cities, setCities] = useState([]);
    const [input, setInput] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        const foundCity = City.lookupViaCity(input);
        if (!foundCity.length) {
            setButtonDisabled(true);
            return;
        }
        setButtonDisabled(false);

        if (!isCityExists(input)) {
            setCity(foundCity[0]);
        }
    }, [input]);

    function isCityExists(cityName) {
        return cities.some((el) => el.city.toLowerCase() === cityName.toLowerCase());
    }

    function inputHandler(e) {
        setInput(e.target.value);
    }

    function buttonHandler(e) {
        e.preventDefault();
        setInput('')
        setIsSelected(true);
        setCities(prev => [...prev, city]);
        setCity({});
    }

    function deleteHandler(cityName) {
        setCities(prev => prev.filter(e => e.city.toLowerCase() !== cityName.toLowerCase()));
        setIsSelected(true);
        setCity({});
    }

    return (
        <div className="main-wrapper">
            <form className="clock-form">
                <input type="text" className="city-input" value={input} onInput={inputHandler}/>
                <button className="city-submit" onClick={buttonHandler} disabled={buttonDisabled}>OK</button>
            </form>
            {cities.map((el) => {
                return (
                    <div className="clock-wrapper" key={el.pop} onMouseEnter={() => onClockHover(el)} onMouseLeave={onClockLeave}>
                        <Clock timezone={el.timezone} city={city}/>
                        <h2 className="clock-title">{el.city}</h2>
                        <button className="city-delete" onClick={() => deleteHandler(el.city)}>✗</button>
                    </div>
                )
            })}
        </div>
    )
}
