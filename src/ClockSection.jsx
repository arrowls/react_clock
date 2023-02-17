import City from "city-timezones";
import {useState} from "react";
import Clock from "./Clock";

export default function ClockSection({setCity, setIsSelected, city, onClockHover, onClockLeave}) {
    const [cities, setCities] = useState([]);

    function inputHandler(e) {
        const input = e.target.value;
        const foundCity = City.lookupViaCity(input);
        if (!foundCity.length) return;
        setCity(foundCity[0]);
    }


    function buttonHandler(e) {
        e.preventDefault();
        setIsSelected(true);
        setCities(prev => [...prev, city]);
        setCity({});
    }

    return (
        <div className="main-wrapper">
            <form className="clock-form">
                <input type="text" className="city-input" onInput={inputHandler}/>
                <button className="city-submit" onClick={buttonHandler}>OK</button>
            </form>
            {cities.map((el) => {
                return (
                    <div className="clock-wrapper" key={el.pop} onMouseEnter={() => onClockHover(el)} onMouseLeave={onClockLeave}>
                        <Clock timezone={el.timezone} city={city}/>
                        <h2 className="clock-title">{el.city}</h2>
                    </div>
                )
            })}
        </div>
    )
}
