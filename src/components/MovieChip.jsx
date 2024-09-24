import React from "react";

const MovieChip = ({ category, setSelectedMovies }) => {
  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie !== category)
    );
  };
  return (
    <button style={{width:"120px", height:"40px", backgroundColor:'#148A08', border:'none', borderRadius:'30px', fontFamily:'Roboto', color:'white', fontSize:'15px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      {category.movie} <span style={{color:'#085C00', cursor:'pointer'}} onClick={() => removeSelection(category)}>X</span>
    </button>
  );
};

export default MovieChip;