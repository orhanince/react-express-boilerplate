const express = require("express");
const app = express();
const port = 5000;
const router = require("./src/routes");

// Set app router
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
