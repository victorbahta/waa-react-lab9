import { useState } from "react";
import axios from "axios";
const AddPost = () => {
  const clickHandler = () => {
    const data = {
      title,
      author,
      content,
    };
    axios.post("http://localhost:8080/posts", data).then(() => {
      alert("Post Added successfully");
    });
  };
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea onChange={(e) => setContent(e.target.value)}>
          {content}
        </textarea>
      </div>
      <div>
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <button onClick={clickHandler}>Add Post</button>
      </div>
    </div>
  );
};
export default AddPost;
