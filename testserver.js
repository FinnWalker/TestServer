const express = require("express");
const app = express();

app.use("/hat_test/", express.static("public"));

const port = 5544;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});