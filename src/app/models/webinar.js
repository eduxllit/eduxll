import mongoose from "mongoose";

const customCategorySchema = new mongoose.Schema({
  value:{
    type: String,
  },
  label:{
    type: String,
  }
  
})

const Webinarschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  ptitle: {
    type: String,
    required: [true, "Please provide a page title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
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

const Web = mongoose?.models?.web || mongoose.model("web", Webinarschema);
export default Web;
