const { add } = require("lodash");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = Schema.model("Address", addressSchema);
