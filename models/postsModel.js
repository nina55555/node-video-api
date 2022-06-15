const mongoose = require('mongoose');


const PostsModel = mongoose.model(
    "node-video-api",
    {
      author: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      date: {
          type: Date,
          default: Date.now
      }
    },
    "runways"
);

module.exports = { PostsModel };