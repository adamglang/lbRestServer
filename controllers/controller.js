"use strict";

const mongoose = require("mongoose");
const schemaModels = require("../models/model");
const _ = require("lodash");

class Controller {
  getStrongsData(req, res) {
    const requestedLanguage = req.params.language;
    const requestedStrongsNumber = req.params.strongsNumber;
    const StrongsData = mongoose.model("StrongsData", schemaModels.strongsDataSchema, `Strongs${requestedLanguage}`);
    const strongsLanguageFlag = requestedLanguage === "Hebrew" ? "h" : "g";
    const query = {
      "strongsData": {
        "$elemMatch": {
          "strongsNumber": (strongsLanguageFlag + requestedStrongsNumber)
        }
      }
    };

    StrongsData.find({}, query, (error, payload) => {
      if(error) {
        res.send(error);
      }

      res.json(_.get(payload[0], "strongsData[0]"));
    });
  }

  getChapter(req, res) {
    const requestedBook = _.get(req, "params.book");
    const requestedChapter = _.get(req, "params.chapter");
    const Chapter = mongoose.model("Chapter", schemaModels.chapterSchema, requestedBook);
    const query = {
      "chapters": {
        "$elemMatch": {
          "chapter": requestedChapter
        }
      }
    };

    Chapter.find({}, query, (error, payload) => {
      if(error) {
        res.send(error);
      }

      res.json(_.get(payload[0], "chapters[0]"));
    });
  }
}

module.exports = new Controller;