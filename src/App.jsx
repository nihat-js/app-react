import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [books, setBooks] = useState([]);

  function getBooks() {}

  function editBook() {}
  function deleteBook() {}

  return <div></div>;
}

function BookListItem({ name, author, description }) {
  return (
    <div>
      <h2> Name </h2>
      <h2> Author </h2>
      <button> Learn More </button>
    </div>
  );
}

export default App;
