import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BooksList from "./pages/BooksList.jsx";
import BooksDetails from "./pages/BooksDetails.jsx";
import BooksEdit from "./pages/BooksEdit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BooksDetails />} />
        <Route path="/books/edit" element={<BooksEdit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
