import { Link } from "react-router-dom";
import React from "react";
import "./post.css";

const Post = ({ post }) => {
  // for the image to be shown in all posts page
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
        <span className="postDate">
          <p style={{ textTransform: "uppercase" }}>{post.username}</p>
          <p>&nbsp;&nbsp;•&nbsp;&nbsp;</p>
          <p>{new Date(post.createdAt).toDateString()}</p>
        </span>
        {post.photo ? (
          <div className="postContent">
            <div className="postImgBox">
              <img className="postImg" src={PF + post.photo} alt="" />
            </div>
            <div className="postInfo">
              <div className="postCats">
                {post.categories.map((c) => {
                  <span className="postCat">
                    {/* <Link className="link" to="/posts?cat=Music"> */}
                    {c.name}
                    {/* </Link> */}
                  </span>;
                })}
              </div>
              <span className="postTitle link">
                {/* <Link to="/post/abc" className="link"> */}
                {post.title}
                {/* </Link> */}
              </span>
              <p className="postDesc">{post.desc} </p>
            </div>
          </div>
        ) : (
          <div className="postContent1">
            {/* <div className="postImgBox">
              <img className="postImg" src={PF + post.photo} alt="" />
            </div> */}
            <div className="postInfo">
              <div className="postCats">
                {post.categories.map((c) => {
                  <span className="postCat">
                    {/* <Link className="link" to="/posts?cat=Music"> */}
                    {c.name}
                    {/* </Link> */}
                  </span>;
                })}
              </div>
              <span className="postTitle link">
                {/* <Link to="/post/abc" className="link"> */}
                {post.title}
                {/* </Link> */}
              </span>
              <p className="postDesc">{post.desc} </p>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Post;
