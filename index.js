const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/results", (req, res) => {
  const passedLevel = req.query.level;
  console.log(passedLevel);

  const options = {
    method: "GET",
    url: "https://twinword-twinword-bundle-v1.p.rapidapi.com/quiz_type1/",
    params: {
      level: passedLevel,
      area: "sat",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "twinword-twinword-bundle-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  //res.send("results");
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
