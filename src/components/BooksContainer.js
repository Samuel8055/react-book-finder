import React, { useContext } from "react";
import { BooksContext } from "../context/Context";
import Book from "./Book";

import Loader from "./Loader";

const BooksContainer = () => {
  const { result, title, loading } = useContext(BooksContext);

  return (
    <div>
      {result.length > 0 && !loading ? (
        <div className='mt-5'>
          <h5 className='text-center mb-4'>
            Showing results for <span className='result-string'>{title}</span>{" "}
          </h5>
          <div className='my-4 d-flex flex-wrap justify-content-center'>
            {result.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        </div>
      ) : !loading ? null : (
        <Loader />
      )}
    </div>
  );
};

export default BooksContainer;
