'use strict';

import mongoose from 'mongoose';

var PathSchema = new mongoose.Schema({
  _id: String,
  name: String,
  image: String,
  tags: Array,
  learner: Number,
  hours: Number,
  description: String,
  sign_up: String,
  upvotes: { type: Number, default: 0},
  downvotes: { type: Number, default: 0},
});

export default mongoose.model('Path', PathSchema);
