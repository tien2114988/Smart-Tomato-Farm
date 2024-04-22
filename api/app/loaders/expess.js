const express = require("express");
const logger = require("morgan");
const bodyPraser = require("body-parser");
const cors = require("cors");
const lightRouter = require("../routes/light.route.js");

async function expressLoader({ app }) {
  app.use(logger("dev"));
  app.use(bodyPraser.json());
  app.use(cors());

  app.use("/api/light", lightRouter);

  //catch 404 error
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(() => {
    const error = app.get("env") === "development" ? err : {};
    const status = err.status || 500;

    // response to client
    return res.status(status).json({
      error: {
        message: error.message,
      },
    });
  });

  return app;
}

module.exports = {
  expressLoader,
};
