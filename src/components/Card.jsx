import { StyledCard } from "./StyledCard.jsx";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const bkgColor = props.bkgFunction(props.img, 5);
  const bkgHover = props.bkgFunction(props.img, 9);

  const textColor =
    props.img[props.img.length - 1] === "d"
      ? "gray"
      : "rgba(255, 255, 255, .7)";

  function comparar(img) {
    if (img.split("")[2] === "d") {
      return "day";
    }
    return "night";
  }

  let path = `/ciudad/${props.id}`;
  return (
    <StyledCard
      id={`card${props.id}`}
      className="card"
      bkg={bkgColor}
      bkgHover={bkgHover}
      textColor={textColor}
    >
      <button onClick={props.onClose}>X</button>
      <Link to={path} className="link">
        <h4>{props.name}</h4>
        <label className="hora"> at {comparar(props.img)} </label>
        <div className="temp">
          <div className="minTemp">
            <h5> min </h5>
            <h5> {props.min}° </h5>
          </div>
          <div className="maxTemp">
            <h5> max </h5>
            <h5> {props.max}° </h5>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt={props.img}
          />
        </div>
      </Link>
    </StyledCard>
  );
}
