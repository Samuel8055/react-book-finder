import React, { useContext } from "react";
import { BooksContext } from "../context/Context";

const Searchbar = () => {
  const { changeHandler, submitHandler } = useContext(BooksContext);

  return (
    <div className='col-10 col-md-6 mx-auto search-container mt-2'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='search'
          placeholder='Search for books, authors. . .'
          onChange={changeHandler}
        />

        <button type='submit' className='submit-btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
