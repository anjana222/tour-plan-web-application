import mongoose from "mongoose";

const guide = mongoose.Schema;

const newGuide = new guide({
  nic: {
    type: String,
  },

  name: {
    type: String,
  },

  gender: {
    type: String,
  },

  phoneNo: {
    type: String,
  },

  bio: {
    type: String,
  },
  languages: {
    type: String,
  },

  fee: {
    type: Number,
  },

  image: {
    type: String,
  },
  availability: {
    type: String,
  },

  password: {
    type: String,
  },
  area: {
    type: String,
  },
});

const guides = mongoose.model("guide", newGuide);

export default guides;
