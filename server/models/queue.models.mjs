import mongoose from "mongoose";

function capitalize(val) {
  if (typeof val !== "string") val = "";
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

const queueSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      set: capitalize,
    },
    lastName: {
      type: String,
      required: true,
      set: capitalize,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model("Queue", queueSchema);
export default Branch;
