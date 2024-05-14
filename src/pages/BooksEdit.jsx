import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../consts/index";
export function BooksEdit() {
  const [book, setBook] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fileInputRef = useRef();

  const params = useParams();

  async function getBook() {
    let id = params.id.toString();
    let res = await axios.get(baseURL + "books/" + id);
    if (res.status.toString().startsWith("2")) {
      setFormData({
        name: res.data.name,
        author: res.data.author,
        description: res.data.description,
        image: res.data.image,
      });
      setLoading(false);
    }
  }

  async function handleSubmit() {
    let id = params.id.toString();
    let res = await axios.put(baseURL + "books/" + id,);
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

  useEffect(() => {
    getBook();
    console.log(formData);
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Edit book</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Decsription"
          name="description"
          onChange={handleChange}
          value={formData.description}
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
          Edit it
        </button>
      </form>
    </div>
  );
}

// function ReviewsList() {

// }

// function ReviewsItem({ profileImage, message, createdAt }) {
//   return (
//     <div>
//       <img src={{ profileImage }} alt="" width="64px" />
//       <p> {{ message }} </p>
//       <p> {{ createdAt }} </p>
//     </div>
//   );
// }
