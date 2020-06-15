import React, { useState, createContext } from "react";

const BooksContext = createContext();

const BooksProvider = (props) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (query === "") {
      alert("Enter a book or an author in the search field!");
      setLoading(false);
    } else {
      querySearch(query);
      setTitle(query);
      setLoading(true);
    }
  };

  const querySearch = (query) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBJCzebbGoae5bdVE8Am1QvEeRoipB8YmM`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.items);
        setLoading(false);
      });
  };

  return (
    <BooksContext.Provider
      value={{ changeHandler, submitHandler, result, title, loading }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
