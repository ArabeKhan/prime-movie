import React from "react";
import Header from "./components/Header";
import Home from "./Containers/Home";
import { GlobalStyle } from "./GlobalStyles";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
