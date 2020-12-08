const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.json({ name: "Foo" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
