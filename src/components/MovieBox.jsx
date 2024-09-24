import React from "react";
import './MovieBox.css'

const MovieBox = ({ category, selectedMovies, setSelectedMovies }) => {

    const handleSelection = (category) => () => {
        if(selectedMovies.includes(category)){
            setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
        } else {
            setSelectedMovies([...selectedMovies, category])
        }
    }

  return (
    <div>
    <div
      style={{
        backgroundColor: category.bgColor,
      }}
      onClick={handleSelection(category)}
      className="box"
    >
      <h1>{category.movie}</h1>
      <img src={category.imgSrc} alt="img" />
    </div>
    </div>
  );
};

export default MovieBox;