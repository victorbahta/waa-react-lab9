import { useState } from "react";
import Post from "./Post";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";
const Posts = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [postInfo, setPostInfo] = useState(null);
  const { posts } = props;
  const clickHandler = async (p) => {
    setPostInfo(p);
    setShowDetails(!showDetails);
  };

  return (
    <div className="posts-container">
      <div className="item top-50">
        <AddPost />
      </div>
      <div className="item">
        {posts.map((p) => {
          return (
            <div key={p.id} onClick={() => clickHandler(p)}>
              <Post id={p.id} title={p.title} author={p.author} />
            </div>
          );
        })}
      </div>
      <div className="item">
        {" "}
        {showDetails && <PostDetails {...postInfo} />}
      </div>
    </div>
  );
};

export default Posts;
