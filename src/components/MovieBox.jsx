import React from "react";
import './MovieBox.css'

const MovieBox = ({ category, selectedMovies, setSelectedMovies }) => {

    const handleSelection = (category) => () => {
        if(selectedMovies.find((movie) => movie.id === category.id)){
          setSelectedMovies(selectedMovies.filter((movie)=>movie.id !== category.id));
        }else{
          setSelectedMovies([...selectedMovies,category])
        }
    }

    const isSelected = selectedMovies.some((movie) => movie.id === category.id);

  return (
    <div>
    <div
      style={{
        backgroundColor: category.bgColor,
        border: isSelected ? "5px solid green" : "5px solid",
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