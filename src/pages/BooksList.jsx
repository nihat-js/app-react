import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../consts";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BooksList() {
  // let { data, isLoading, err } = useFetch(baseURL + "books");

  const fileInputRef = useRef();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    let res = await axios.get(baseURL + "books");
    if (res.status.toString().startsWith("2")) {
      setBooks(res.data);
    }
  }

  async function handleAddBook(e) {
    e.preventDefault();
    if (!formData.name && !formData.author) {
      return;
    }

    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("author", formData.author);
    newFormData.append("description", formData.description);
    newFormData.append("file", fileInputRef.current.files[0]);

    console.log({ formData });
    return;
    // console.log({ a: newFormData.values() });

    let res = await axios.post(baseURL + "books", newFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return;

    if (res.status.toString().startsWith("2")) {
      getBooks();
      // console.log(res.data);
      console.log("added");
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleDeleteBook(id) {
    let res = await axios.delete(baseURL + "/books/" + id);
    console.log(res);
    if (!res) {
    }

    setBooks(() => books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleAddBook} className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add book</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Decsription"
          name="decsription"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="file"
          placeholder="Image"
          name="image"
          ref={fileInputRef}
          className=""
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add it
        </button>
      </form>

      <h2 className="my-5 text-center  text-4xl"> All Books </h2>
      {books?.length && (
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  mx-auto"
          style={{ maxWidth: "1200px" }}
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="px-2 py-4">
              <th>Name</th>
              <th>Author</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr className="books-item bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-2 py-4">
                <td> {item.name.substring(0, 40)} </td>
                <td> {item.author} </td>
                <td> {item.description} </td>
                <td> {item.image || ""} </td>
                <td>
                  <Link
                    to={"/books/" + item.id}
                    className="border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded-lg"
                  >
                    Details
                  </Link>
                  <Link
                    to={"/books/" + item.id / +"edit"}
                    className="border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteBook(item.id)}
                    className="border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
