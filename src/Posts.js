import Post from "./Post";
const Posts = (props) => {
  const { posts } = props;
  return posts.map((p) => {
    return <Post id={p.id} title={p.Title} author={p.Author} gpa={p.GPA} />;
  });
};

export default Posts;
