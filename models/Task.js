const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
TaskSchema.plugin(timestamp, {
  createdAt: "created_at",
  updatedAt: "updated_at",
});
module.exports = mongoose.model("Task", TaskSchema);
