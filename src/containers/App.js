import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "./About.jsx";
import Ciudad from "./Ciudad.jsx";

function App() {
  const { REACT_APP_APIKEY } = process.env;
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => `card${c.id}` !== id));
  }

  function onSearch(ciudad) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_APIKEY}&units=metric&lang=es`;
    fetch(url)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
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
            longitud: recurso.coord.lon,
          };
          if (document.querySelector(`#card${recurso.id}`)) {
            return;
          }
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  // function onFilter(ciudadId) {
  //   let ciudad = cities.filter(c => c.id == parseInt(ciudadId));
  //   if(ciudad.length > 0) {
  //       return ciudad[0];
  //   } else {
  //       return null;
  //   }
  // }

  function bkgFunction(img, opacity) {
    const color = {
      d1: "81, 183, 241",
      d2: "101, 125, 152",
      d3: "101, 163, 202",
      d4: "12, 71, 100",
      d5: "150, 210, 241",
      n1: "56, 126, 165",
      n2: "51, 63, 76",
      n3: "63, 102, 126",
      n4: "6, 34, 49",
      n5: "103, 144, 165",
    };
    let imgArr = img.split("");
    let hour = imgArr.pop();
    let number = imgArr.join("");
    switch (number) {
      case "01":
      case "02":
      case "03":
      case "10":
        if (hour === "d") {
          return `rgba(${color.d1}, .${opacity})`;
          break;
        } else {
          return `rgba(${color.n1}, .${opacity})`;
          break;
        }

      case "04":
        if (hour === "d") {
          return `rgba(${color.d2}, .${opacity})`;
          break;
        } else {
          return `rgba(${color.n2}, .${opacity})`;
          break;
        }

      case "09":
        if (hour === "d") {
          return `rgba(${color.d3}, .${opacity})`;
          break;
        } else {
          return `rgba(${color.n3}, .${opacity})`;
          break;
        }

      case "11":
        if (hour === "d") {
          return `rgba(${color.d4}, .${opacity})`;
          break;
        } else {
          return `rgba(${color.n4}, .${opacity})`;
          break;
        }

      case "13":
        if (hour === "d") {
          return `rgba(${color.d5}, .${opacity})`;
          break;
        } else {
          return `rgba(${color.n5}, .${opacity})`;
          break;
        }

      default:
        if (hour === "d") {
          return `rgba(${color.d1}, .${opacity - 1})`;
          break;
        } else {
          return `rgba(${color.n1}, .${opacity - 1})`;
          break;
        }
    }
  }

  return (
    <BrowserRouter>
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => (
          <Cards cities={cities} onClose={onClose} bkgFunction={bkgFunction} />
        )}
      />
      <Route path="/about" component={About} />
      <Route
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad
            match={match}
            api={REACT_APP_APIKEY}
            cities={cities}
            bkgFunction={bkgFunction}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
