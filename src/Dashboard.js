import Posts from "./Posts";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [title, setTitle] = useState("Title");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await axios({
        method: "GET",
        url: "http://localhost:8080/posts",
      });
      setPosts(data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Posts posts={posts} />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => setTitle(title)}>Update Title</button>
    </div>
  );
};

export default Dashboard;
