const { Schema, model } = require("mongoose");

const musicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    gener: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const musicModel = model("musics", musicSchema);
module.exports = musicModel;
