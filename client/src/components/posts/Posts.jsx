import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <div className="postHeading">
        FIND ALL BLOGS HERE!<br></br>MERN | FSA | REACT
      </div>
      <p>{posts.username}</p>
      {/* {console.log("postts",posts)} */}
      {posts
        .slice(0)
        .reverse()
        .map((p) => (
          <Post post={p} />
        ))}
    </div>
  );
};

export default Posts;
