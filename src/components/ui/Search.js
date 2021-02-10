import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const Search = ({getQuery}) => {
    const [text,setText] = useState(''); 
    const OnChange=(q)=>{
        setText(q);
        getQuery(q); 
    }
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e)=>OnChange(e.target.value)}
          autoFocus
          
        ></input>
      </form>
    </section>
  );
};

export default Search;
