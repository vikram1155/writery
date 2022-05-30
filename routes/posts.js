// UPDATE AND DELETE USERS IN USER ROUTES
const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE NEW POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Access denied to edit other's posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE POST

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Access denied to delete other's posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET SINGLE POST

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL POSTS by username, category
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catname = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catname) {
      posts = await Post.find({
        categories: {
          $in: [catname],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});
// UPDATE id = 627f8b9926e16b2e86fd1204

// router.put("/:id", async(req, res) => {
//     if (req.body.userId === req.params.id) {
//         if (req.body.password) {
//             const salt = await bcrypt.genSalt(10);
//             req.body.password = await bcrypt.hash(req.body.password, salt);
//         }
//         try {
//             const updatedUser = await User.findByIdAndUpdate(
//                 req.params.id, {
//                     $set: req.body,
//                 }, { new: true }
//             );
//             res.status(200).json(updatedUser);
//         } catch (error) {
//             res.status(500).json(error);
//         }
//     } else {
//         res.status(401).json("You can update only your account");
//     }
// });

// // DELETE
// router.delete("/:id", async(req, res) => {
//     if (req.body.userId === req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             try {
//                 //   deletemany coz, we have many posts belonging to one username and username is in post model
//                 await Post.deleteMany({ username: user.username });
//                 await User.findByIdAndDelete(req.params.id);
//                 res.status(200).json("User Deleted");
//             } catch (error) {
//                 res.status(500).json(error);
//             }
//         } catch (error) {
//             res.status(404).json("User not found");
//         }
//         //   deleteing user should also delete their posts, hence one try catch is for posts
//     } else {
//         res.status(401).json("You can delete only your account");
//     }
// });

// // GET SINGLE USER BY ID
// router.get("/:id", async(req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         const { password, ...others } = user._doc;
//         res.status(200).json(others);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

module.exports = router;
