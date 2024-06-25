import mongoose from "mongoose"

const houseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
})

export const HouseModel = mongoose.model("House", houseSchema)
