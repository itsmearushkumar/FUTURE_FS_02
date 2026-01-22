const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    source: String,
    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Lead || mongoose.model("Lead", leadSchema);
