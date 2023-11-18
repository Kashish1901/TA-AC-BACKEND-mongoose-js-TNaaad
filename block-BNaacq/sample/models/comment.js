var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, required: true },
    article: String,
  },
  { timestamps: true }
);

module.exports = Schema.model("Comment", commentSchema);
