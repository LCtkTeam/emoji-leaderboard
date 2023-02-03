const express = require("express");

const app = express();
app.set("view engine", "ejs");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const axios = require("axios").default;
app.get("/api/rankings", require("cors")(), async (_, res) => {
  const { data } = await axios.get("https://api.emojitracker.com/v1/rankings");
  return res.json(data.slice(0, 50));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening."));
