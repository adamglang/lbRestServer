"use strict";

module.exports = (app) => {
  const controller = require("../controllers/controller");

  app.route("/api/kjbible/:book/:chapter").get(controller.getChapter);
  app.route("/api/strongsdata/:language/:strongsNumber").get(controller.getStrongsData);
};