import Posts from "./Posts";
import { useState } from "react";
const Dashboard = () => {
  const [title, setTitle] = useState("Title");
  const posts = [
    {
      id: 112,
      Title: title,
      Author: "Dean",
      GPA: 3.4,
    },
    {
      id: 113,
      Title: "Enjoy Life",
      Author: "Jasmine",
      GPA: 3.4,
    },
  ];

  return (
    <div>
      <h1>{title}</h1>
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
