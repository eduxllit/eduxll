import mongoose from "mongoose";


const customCategorySchema = new mongoose.Schema({
  value:{
    type: String,
  },
  label:{
    type: String,
  }
  
})


const FreeMasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  ptitle: {
    type: String,
    required: [true, "Please provide a page title"],
  },
  ylink: {
    type: String,
    required: [true, "Please provide a ylink"],
  },
  slug: {
    type: String,
    required: { true: "Please provide a slug" },
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Please provide a content"],
  },
  date: {
    type: String,
    required: [true, "Please provide a date"],
  },
  time: {
    type: String,
    required: [true, "Please provide a time"],
  },
  featureImage: {
    type: String,
  },
  customCategory: {
    type: [customCategorySchema],
  },
  images: {
    type: String,
  },
  mtitle: {
    type: String,
    required: [true, "Please provide a meta title"],
  },
  mdescription: {
    type: String,
    required: [true, "Please provide a meta description"],
  },
});

const FreeMaster =
  mongoose?.models?.freemaster ||
  mongoose.model("freemaster", FreeMasterSchema);
export default FreeMaster;
