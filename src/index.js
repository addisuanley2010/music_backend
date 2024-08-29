const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const musicRoute = require("./routes/musicRoute");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


app.use("/", musicRoute);

try {
  mongoose
    .connect(process.env.DB_URI_REMOTE)
      //  .connect(process.env.DB_URI)
    .then(() => {
      app.listen(port, () =>
        console.log(`Application running on port ${port}`)
      );
    });
} catch (err) {
  console.log(err.message); 
}
  