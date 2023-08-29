import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();

  const location = useLocation();

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 101)}</p>
      <p>{location.state.body.slice(102, 200)}</p>
    </div>
  );
};

export default Blog;
