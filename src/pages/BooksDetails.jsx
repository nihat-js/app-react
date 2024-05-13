import React from "react";

export default function BooksDetails() {
  return <div></div>;
}

function ReviewsList() {}

function ReviewsItem({ profileImage, message, createdAt }) {
  return (
    <div>
      <img src={{ profileImage }} alt="" width="64px" />
      <p> {{ message }} </p>
      <p> {{ createdAt }} </p>
    </div>
  );
}
