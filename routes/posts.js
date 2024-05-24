import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";
const router = express.Router();

//Get all posts
router.get("/", getPosts);

//Get single post
router.get("/:id", getPost);

//Create a new post
router.post("/", createPost);

//Update a Post
router.put("/:id", updatePost);

//Delete the Post
router.delete("/:id", deletePost);

export default router;
