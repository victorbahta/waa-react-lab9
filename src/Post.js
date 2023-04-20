import { useState } from "react";
import axios from "axios";
const Posts = (props) => {
  return (
    <div>
      <h2>ID: {props.id}</h2>
      <h2>Title: {props.title}</h2>
      <h4>Author: {props.author}</h4>
    </div>
  );
};

export default Posts;
