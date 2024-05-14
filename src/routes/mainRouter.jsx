import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksList from "../pages/BooksList";
import { BooksDetails } from "../pages/BooksDetails";
import { BooksEdit } from "../pages/BooksEdit";
export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BooksDetails />} />
        <Route path="/books/:id/edit" element={<BooksEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
