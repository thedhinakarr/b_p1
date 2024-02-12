import express from "express";
import dbConnect from "./dbConnect.js";

const app = express();

app.use(express.json());

app.listen(8001, () => {
  console.log("Listening on port", 8001)
});
