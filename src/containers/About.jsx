import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h4 className="title"> About </h4>
      <p className="p">
        {" "}
        This is an App builded in the React week of the Bootcamp Henry. <br />
        The main utility is in the main root and it is to show the actual
        weather of the city introduced in the input. So, if you click in the
        city card it will redirect you to the details about that specific city.{" "}
      </p>
      <footer className="footer">Page created by Julian Ramirez.</footer>
    </div>
  );
}
