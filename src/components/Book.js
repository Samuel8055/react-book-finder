import React from "react";
import defaultThumbnail from "../assets/no_thumb.png";
import star from "../assets/star.png";

const Book = ({ book }) => {
  const bookInfo = book.volumeInfo;

  const title = bookInfo.title;
  const authors = bookInfo.authors ? bookInfo.authors : ["Unknown"];
  const link = bookInfo.infoLink;

  const date = bookInfo.publishedDate
    ? bookInfo.publishedDate
    : "Not available";

  const rating = bookInfo.averageRating
    ? bookInfo.averageRating
    : "Not available";

  const thumbnail = bookInfo.imageLinks
    ? bookInfo.imageLinks.smallThumbnail
    : defaultThumbnail;

  return (
    <div className='book-container'>
      <div className='thumbnail'>
        <img src={thumbnail} alt='book' />
      </div>

      <div className='book-info'>
        <h5 className='book-title' onClick={() => window.open(link, "_blank")}>
          {title}
        </h5>

        <div className='author'>
          <span className='bold'>Author: </span>
          {authors.map((author, index) => (
            <span key={index} className='book-author'>
              {author}
              {", "}{" "}
            </span>
          ))}
        </div>

        <p className='my-1'>
          <span className='bold'>Published: </span>
          {date}
        </p>
        <p>
          <span className='bold'>Rating: </span>
          {rating}
          {bookInfo.averageRating ? (
            <span>
              <img src={star} alt='rating' className='star' />
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default Book;
