const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/photo", (req, res) => {
  axios
    .get(
      "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US"
    )
    .then((r) => {
      res.json({
        title: r.data.images[0].title,
        url: `https://www.bing.com${r.data.images[0].url}`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(5000);
