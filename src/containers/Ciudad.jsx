import { StyledCiudad } from "./StyledCiudad.jsx";
import React from "react";

export default function Ciudad(props) {
  let id = props.match.params.ciudadId;
  return (
    <>
      {props.cities.map((c) => {
        if (Number(c.id) === Number(id)) {
          const bkgColor = props.bkgFunction(c.img, 3);
          const bkgHover = props.bkgFunction(c.img, 8);
          return (
            <StyledCiudad
              className="container"
              bkg={bkgColor}
              bkgHover={bkgHover}
              key={c.id + c.name}
            >
              <div className="nombre">
                <h1> {c.name} </h1>
                <div className="picture">
                  <img
                    src={`https://openweathermap.org/img/wn/${c.img}@2x.png`}
                    alt="clima"
                  />
                </div>
              </div>
              <div className="temp">
                <div className="data">
                  <h3>Minima</h3>
                  <h5>{c.min}°</h5>
                </div>
                <div className="data">
                  <h3>Actual</h3>
                  <h5>{c.temp}°</h5>
                </div>
                <div className="data">
                  <h3>Maxima</h3>
                  <h5>{c.max}°</h5>
                </div>
              </div>
              <hr />
              <div className="weather">
                <div className="data">
                  <h3>Weather</h3>
                  <h5>{c.weather}</h5>
                </div>
                <div className="data">
                  <h3>Wind</h3>
                  <h5>{c.wind}</h5>
                </div>
                <div className="data">
                  <h3>Clouds</h3>
                  <h5>{c.clouds}</h5>
                </div>
              </div>
              <hr />
              <div className="position">
                <div className="data">
                  <h3> Latitud </h3>
                  <h5> {c.latitud} </h5>
                </div>
                <div className="data">
                  <h3> Longitud </h3>
                  <h5> {c.longitud} </h5>
                </div>
              </div>
            </StyledCiudad>
          );
        }
      })}
    </>
  );
}
