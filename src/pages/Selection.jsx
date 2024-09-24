import React from "react";
import "../Css/Selection.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";

const Selection = () => {
  const MOVIES = [
    {
      id: 0,
      movie: "Action",
      imgSrc: "selection/action.png",
      bgColor: "#FF5209",
    },
    {
      id: 1,
      movie: "Drama",
      imgSrc: "selection/drama.png",
      bgColor: "#D7A4FF",
    },
    {
      id: 2,
      movie: "Romance",
      imgSrc: "selection/romance.png",
      bgColor: "#11B800",
    },
    {
      id: 3,
      movie: "Thriller",
      imgSrc: "selection/thriller.png",
      bgColor: "#84C2FF",
    },
    {
      id: 4,
      movie: "Horror",
      imgSrc: "selection/horror.png",
      bgColor: "#7358FF",
    },
    {
      id: 5,
      movie: "Western",
      imgSrc: "selection/western.png",
      bgColor: "#902500",
    },
    {
      id: 6,
      movie: "Fantasy",
      imgSrc: "selection/fantasy.png",
      bgColor: "#FF4ADE",
    },
    {
      id: 7,
      movie: "Fiction",
      imgSrc: "selection/fiction.png",
      bgColor: "#E61E32",
    },
    {
      id: 8,
      movie: "Music",
      imgSrc: "selection/music.png",
      bgColor: "#6CD061",
    },
  ];

  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);

  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/info");
    }
  };

  return (
    <div className="wrapper">
      <div className="left-side">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "60%",
            marginTop: "60px",
            marginLeft: "120px",
          }}
        >
          {MOVIES.map((category) => (
            <div key={category.id}>
              <MovieBox
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
                category={category}
              />
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={moveNext}>
          Next Page
        </button>
      </div>

      <div className="right-side">
        <div className="right-wrapper-selection">
        <div className="selection-heading">
          <h1>Super app</h1>
        </div>

        <div className="selection-subheading">
          <h1>Choose your entertainment category</h1>
        </div>

        <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
          {selectedMovies.map((category) => (
            <p key={category.id}>
              <MovieChip
                key={category.id}
                category={category}
                setSelectedMovies={setSelectedMovies}
              />
            </p>
          ))}
        </div>

        <div className="err" >
          {selectedMovies.length < 3 && (
            <p
              style={{
                color: "red",
              }}
            >
              Minimum 3 category required
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
