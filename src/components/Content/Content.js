import Slider from "../NetflixSlider";
import movies from "../data/data.json";
import "./Content.css";

function Content() {
  const types = ["Bilim Kurgu ve Fantastik", "Korku"];
  return (
    <div>
      {types.map((type) => {
        return (
          <div>
            <h1 className="header">{type}</h1>
            <Slider>
              {movies.map(
                (movie) =>
                  movie.type === type && (
                    <Slider.Item movie={movie} key={movie.id}>
                      item1
                    </Slider.Item>
                  )
              )}
            </Slider>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
