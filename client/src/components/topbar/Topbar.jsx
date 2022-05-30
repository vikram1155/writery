import React, { useContext } from "react";
import "./topbar.css";

import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Topbar = () => {
  const PF = "http://localhost:5000/images/";
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <Link className="link" to="/" style={{ fontSize: "18px" }}>
            WRITERY
          </Link>
        </div>
        {/* <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <a
                href="/#about"
                style={{ textDecoration: "none", color: "#000" }}
              >
                ABOUT
              </a>
            </li>
            <li className="topListItem fcontact">
              <a
                href="#footer"
                style={{ textDecoration: "none", color: "#000" }}
              >
                CONTACT
              </a>
            </li>
            {user && (
              <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li>
            )}
          </ul>
        </div> */}
        <div className="topRight">
          {user ? (
            <ul className="topList">
              {/* <li className="topListItem" onClick={handleLogout}>
                LOGOUT
              </li> */}
              <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
            </ul>
          ) : (
            <ul className="topList">
              <li className="topListItem" onClick={() => navigate("/login")}>
                LOGIN
              </li>
              <li className="topListItem" onClick={() => navigate("/register")}>
                REGISTER
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
// //
// import React from "react";
// import "./topbar.css";

// import { Navbar } from "responsive-navbar-react";
// import "responsive-navbar-react/dist/index.css";

// const Topbar = () => {
//   const props = {
//     items: [
//       {
//         text: "Home",
//         link: "/",
//       },
//       {
//         text: "Doc",
//         link: "#docs",
//       },
//       {
//         text: "Custom",
//         link: "#custom-bar",
//       },
//       {
//         text: "Contact",
//         link: "#contact",
//       },
//     ],
//     logo: {
//       text: "BLOGG | MEDIUM",
//     },
//     style: {
//       barStyles: {
//         background: "#fff",
//       },
//       sidebarStyles: {
//         background: "#222",
//         buttonColor: "white",
//       },
//     },
//   };
//   return <Navbar {...props} />;
// };

// export default Topbar;
