import Globe from "react-globe.gl";
import {useEffect, useRef, useState} from "react";
import ClockSection from "./ClockSection";

function App() {
    const [city, setCity] = useState({});
    const [markers, setMarkers] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const globeRef = useRef();


    useEffect(() => {
        if (!city?.lat) return;
        globeRef.current.pointOfView({lat: city.lat, lng: city.lng, altitude: 1}, 700);
        setMarkers([
            {
                lat: city.lat,
                lng: city.lng,
                name: city.city,
            }
        ])
    }, [city])

    useEffect(() => {
        if (isSelected === false) return;
        setMarkers([]);
        setIsSelected(false);
    }, [isSelected])

    function onClockHover(city) {
        setMarkers([
            {
                lat: city.lat,
                lng: city.lng,
                name: city.city,
            }
        ]);
        globeRef.current.pointOfView({lat: city.lat, lng: city.lng, altitude: 1}, 700);

    }


  return (
    <div className="App">
        <ClockSection
            setCity={setCity}
            setIsSelected={setIsSelected}
            city={city}
            onClockHover={onClockHover}
            onClockLeave={() => setMarkers([])}/>
      <Globe
          ref={globeRef}
          onGlobeReady={() => globeRef.current.pointOfView({lat: 0, lng: 0, altitude: 1})}
          animateIn={false}
          labelsData={markers}
          labelSize={1}
          labelDotRadius={0.2}
          labelAltitude={0.01}
          labelsTransitionDuration={200} //ms
          labelLat={d => d.lat}
          labelLng={d => d.lng}
          labelText={d => d.name}
          width={window.innerWidth * 2}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}

export default App;
