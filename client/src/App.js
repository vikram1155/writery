import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import "./App.css";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Topbar user={user} /><br></br><br></br><br></br><br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;


// use this in client's package.json

// "proxy": "http://localhost:5000/api/"