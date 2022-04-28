const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Not Authorised"],
  },
  question: {
    type: mongoose.Schema.ObjectId,
    ref: "Question",
    required: [true, "Not Authorised"]
  },
});

module.exports = mongoose.model("Answer", AnswerSchema)
