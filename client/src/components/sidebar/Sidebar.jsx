import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const PF = "http://localhost:5000/images/";
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p
          style={{
            margin: 0,
            fontWeight: 500,
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          Create Your Writery Now!
        </p>
        <button>
          <Link className="link" to="/write">
            WRITE
          </Link>
        </button>
        <button>
          <a className="link" href="/#about">
            ABOUT
          </a>
        </button>
        {user ? (
          <>
          <span className="sidebarTitle">PROFILE</span>
            <img src={PF + user.profilePic} alt="" />
            <p style={{ fontSize: "12px" }}>
              Hello👋
              {user.username}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <li className="sidebarListItem">
              <Link className="link" to={`/?cat=${cat.name}`}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/vikram.s.967/" target="_blank">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/v1kr4m_s/" target="_blank">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://github.com/vikram1155" target="_blank">
            <i className="sidebarIcon fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/vikram1155/" target="_blank">
            <i className="sidebarIcon fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <button onClick={handleLogout}>
        <Link className="link" to="/write">
          LOGOUT
        </Link>
      </button>
    </div>
  );
};

export default Sidebar;
