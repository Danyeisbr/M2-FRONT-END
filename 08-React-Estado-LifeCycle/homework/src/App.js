import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  const [cities, setCities] = useState([]);
  //Esta es mi apiKey despues de haberme registrado en la pagina.
  const apiKey = 'e7ef9244bddbf1587215909c6e0a77d7';
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
