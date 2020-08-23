const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    packsize: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    price: {
      type:String,
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    // stock: {
    //   type: String,
    // },
    // sold: {
    //   type: String,
    //   default: 0
    // },
    photo: {
      data: Buffer,
      contentType: String
    },
    productImagePath :{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
