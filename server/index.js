const express = require("express");
const app = express();
const PORT = "8000";

app
  .get("/", (req, res) => {
    res.send("This is the kiosk server");
  })
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
