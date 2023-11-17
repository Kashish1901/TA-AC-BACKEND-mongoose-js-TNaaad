var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: string },
  email: { type: string, lowercase: true },
  age: { type: number, default: 0 },
  favourites: [string],
  marks: [number],
  password: { type: string, min: 5, max: 15 },
  createdAt: { type: Date, default: date },
});
