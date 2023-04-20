import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import PostContext from "./PostContext";

function App() {
  const [postId, setPostId] = useState(null);
  console.log("APP: PostId: " + postId);

  return (
    <PostContext.Provider value={{ postId, setPostId }}>
      <div className="App">
        <Dashboard />
      </div>
    </PostContext.Provider>
  );
}

export default App;
