import Post from "./Post";
const Posts = (props) => {
  const { posts } = props;
  const clickHandler = async (id) => {
    console.log("clicked", id);
  };

  return posts.map((p) => {
    return (
      <div key={p.id} onClick={() => clickHandler(p.id)}>
        <Post id={p.id} title={p.title} author={p.author} />
      </div>
    );
  });
};

export default Posts;
