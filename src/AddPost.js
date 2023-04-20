import { useState, useRef } from "react";
import axios from "axios";
const AddPost = () => {
  let titleRef = useRef("");
  let authorRef = useRef("");
  let contentRef = useRef("");
  const clickHandler = () => {
    const data = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
    };
    axios.post("http://localhost:8080/posts", data).then(() => {
      alert("Post Added successfully");
    });
  };
  //   const [title, setTitle] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <input type="text" ref={titleRef} placeholder="Title" />
      </div>
      <div>
        <input type="text" ref={contentRef} placeholder="Content" />
      </div>
      <div>
        <input type="text" ref={authorRef} placeholder="Author" />
      </div>
      <div>
        <button onClick={clickHandler}>Add Post</button>
      </div>
    </div>
  );
};
export default AddPost;
