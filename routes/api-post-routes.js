const express = require('express');
const {
  getPost, 
  deletePost,
  editPost,
  getPosts,
  addPost
} = require('../controllers/api-post-controller');

const router = express.Router();

//Get All Posts
router.get('/api/posts', getPosts);
//Add New Post
router.post('/api/post', addPost);
//Get post by id
router.get('/posts/:id', getPost);
//Delete post by id
router.delete('/posts/:id', deletePost);
//Update post by id
router.put('/edit/:id', editPost);



module.exports = router;
