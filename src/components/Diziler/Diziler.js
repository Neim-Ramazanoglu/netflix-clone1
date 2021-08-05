import React, { useState } from "react";
import "./Diziler.css";
import Slider from "../NetflixSlider";
import movies from "../data/data.json";

function Diziler() {
  const types = ["Bilim Kurgu ve Fantastik", "Korku", "Tüm Diziler"];
  const [value, setValue] = useState("Tüm Diziler");
  const pick = (e) => {
    setValue(e.target.value);
  };
  function handleSlider(type, movies) {
    let filteredMovies = movies;
    if (type != "Tüm Diziler") {
      filteredMovies = movies.filter((movie) => {
        return movie.type === type;
      });
      return (
        <div>
          <h1 className="header">{type}</h1>
          <Slider>
            {filteredMovies.map((movie) => {
              return (
                <Slider.Item key={movie.id} movie={movie}>
                  item1
                </Slider.Item>
              );
            })}
          </Slider>
        </div>
      );
    }

    return (
      <div key={type}>
        <h1 className="header">{type}</h1>
        <Slider>
          {filteredMovies.map((movie) => {
            return (
              <Slider.Item key={movie.id} movie={movie}>
                item1
              </Slider.Item>
            );
          })}
        </Slider>
      </div>
    );
  }
  return (
    <div>
      <br />
      <span className="nav">Diziler</span>
      <select className="dropdown" onChange={(e) => pick(e)} id="type">
        <option value="Tüm Diziler">Tüm Diziler</option>
        <option value="Korku">Korku</option>
        <option value="Bilim Kurgu ve Fantastik">
          Bilim Kurgu ve Fantastik
        </option>
      </select>
      {handleSlider(value, movies)}
    </div>
  );
}

export default Diziler;
