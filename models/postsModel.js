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
        required: false
      },
      videoUrl: {
        type: String,
        required: false
      },
      date: {
          type: Date,
          default: Date.now
      }
    },
    "runways"
);

module.exports = { PostsModel };