"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  "chapters": [{
    "title": String,
    "chapter": Number,
    "passages": Array
  }]
});

const strongsDataSchema = new Schema({
  "strongsData": Array
});

module.exports = {
  "chapterSchema": chapterSchema,
  "strongsDataSchema": strongsDataSchema
};