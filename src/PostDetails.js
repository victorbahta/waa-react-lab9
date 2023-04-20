const PostDetails = (props) => {
  return (
    <div>
      <h1>Post Details</h1>
      <div>
        <h2>ID: {props.id}</h2>
        <h2>Title: {props.title}</h2>
        <h4>Author: {props.author}</h4>
      </div>
    </div>
  );
};

export default PostDetails;
