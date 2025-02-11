import mongoose from "mongoose";
const cakeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required!!"],
    },
    image: {
      type: String,
      required: [true, "cake image is required!!"],
    },
    price: {
      type: Number,
      required: [true, "Price is required!!"],
    },
    isEggless: {
      type: Boolean,
      required: [true, "isEgless field is required!!"],
    },
    for: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("cake", cakeSchema);
