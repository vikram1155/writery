import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [empty, setEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmpty(true);
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <div>
        {empty ? (
          <p className="dangerP">Write your writery</p>
        ) : (
          <p style={{ margin: 0 }}>
            <br></br>
          </p>
        )}
      </div>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
              setEmpty(false);
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => {
              setDesc(e.target.value);
              setEmpty(false);
            }}
          ></textarea>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

// import { useContext, useState } from "react";
// import "./write.css";
// import axios from "axios";
// import { Context } from "../../context/Context";

// export default function Write() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventdefault();
//     const newPost = {
//       username: user.username,
//       title,
//       desc,
//     };
//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       newPost.photo = filename;
//       try {
//         await axios.post("/upload", data);
//       } catch (error) {
//         // console.log(error);
//       }
//     }
//     try {
//       const res = await axios.post("/posts", newPost);
//       // after posting goto the post
//       window.location.replace("/post/" + res.data._id);
//     } catch (error) {
//       // console.log(error);
//     }
//   };
//   return (
//     <div className="write">
//       {file && (
//         <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
//       )}
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input
//             id="fileInput"
//             type="file"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             className="writeInput"
//             placeholder="Title"
//             type="text"
//             autoFocus={true}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//             autoFocus={true}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
