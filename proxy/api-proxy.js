/*
This api-proxy serves as a middleware for making the api calls
in order to avoid cross-origin problems, since server-to-server
communication does not raise the same problems.
Using cors lib allows for local communication with cors policy enabled,
while it is possible to communicate with the API servers through express.
*/

const express = require("express");
const cors = require("cors");
const request = require("request");

const BING_URL = "https://www.bing.com";

const app = express();

app.use(cors());

app.get("/bing-image-url", (req, res) => {
  request(
    { url: `${BING_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      const data = JSON.parse(body);
      const url = data.images[0].url;

      res.json(`${BING_URL}/${url}`);
    }
  );
});

app.get("/user-location", (req, res) => {
  const { lat, lon } = req.query;
  request(
    {
      url: `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lon}&key=c63386b4f77e46de817bdf94f552cddf&language=pt&pretty=1`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/reverse-geocode", (req, res) => {
  const { location } = req.query;
  request(
    {
      url: `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        location
      )}&key=c63386b4f77e46de817bdf94f552cddf&language=pt&pretty=1&no_dedupe=1`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        if (res.status(400)) {
          return res.status(200).json({ results: [] });
        }
        return res.status(500).json({ type: "error", message: error });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/weather-forecast", (req, res) => {
  const { lat, lon } = req.query;
  request(
    {
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=7ba73e0eb8efe773ed08bfd0627f07b8&units=metric`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        if (res.status(400)) {
          return res
            .status(400)
            .json({ type: "error", message: "city not found" });
        }
        return res.status(500).json({ type: "error", message: error });
      }
      res.json(JSON.parse(body));
    }
  );
});

app.listen(3005, () => {
  console.log("Proxy is running on port 3005");
});
