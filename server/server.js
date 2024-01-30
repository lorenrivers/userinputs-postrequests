import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); //must have so the server can understand JSON data
app.use(cors());

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});

app.listen("7000", () => {
  console.log("Server is running");
});
