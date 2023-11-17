var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: number,
  user: Schema.Types.ObjectId,
});
