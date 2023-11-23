const mongoose = require("mongoose");
const Quiz = require("./queschema.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/quizData");
  console.log("db connected");
}

app.get("/quiz", async function (req, res) {
  var idx = req.query.idx;
  try {
    const quiz = await Quiz.find(); // return all the quizzes
    console.log(quiz[idx]);
    res.json(quiz[idx]); // send only the required quiz but this is a object which has two fields, _id and quiz
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/quiz/title", async function (req, res) {
  
  try {
    const quizTitle = await Quiz.find({}, { quizTitle: 1, _id: 0 }); // return all the quizzes
    console.log(quizTitle);
    res.json(quizTitle); // send only the required quiz but this is a object which has two fields, _id and quiz
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(port, function () {
  console.log(`Server is running on port: ${port}.`);
});
