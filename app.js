const express = require("express");

const app = express();

app.listen(3000);

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = app;
