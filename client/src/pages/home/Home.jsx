import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home">
      <div className="home1">
        <Posts posts={posts} />
        <Sidebar />
      </div>
      <Header/>
    </div>
  );
};

export default Home;
