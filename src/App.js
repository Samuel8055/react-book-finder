import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Searchbar from "./components/Searchbar";
import BooksContainer from "./components/BooksContainer";
import { BooksProvider } from "./context/Context";

const App = () => {
  return (
    <div className='app'>
      <h3 className='text-center pb-3 pt-4 title'>Book Finder</h3>

      <BooksProvider>
        <Searchbar />
        <BooksContainer />
      </BooksProvider>
    </div>
  );
};

export default App;
