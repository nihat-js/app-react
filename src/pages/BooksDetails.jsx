import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseURL } from "../consts/index";
export function BooksDetails() {
  const [book, setBook] = useState({});
  const [isLoading, setLoading] = useState(true);

  const params = useParams();
  async function getBook() {
    let id = params.id.toString();
    let res = await axios.get(baseURL + "books/" + id);
    console.log("starting fetch");
    console.log(res);
    if (res.status.toString().startsWith("2")) {
      setBook(res.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="container">
      {!isLoading && (
        <div>
          <h2> Author {{ }} </h2>
          <h2> Image </h2>
          <h2> Description </h2>
        </div>
      )}
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
