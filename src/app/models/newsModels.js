import mongoose from "mongoose";

const customCategorySchema = new mongoose.Schema({
  value:{
    type: String,
  },
  label:{
    type: String,
  }
  
})

const NewsSchma = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  slug: {
    type: String,
    required: { true: "Please provide a slug" },
    unique: true,
  },
  featureImage: {
    type: String,
  },
  images: {
    type: [String],
  },
  link: {
    type: String,
    required: [true, "Please provide a meta link"],
  },
  customCategory: {
    type: [customCategorySchema],
  },
});

const News = mongoose?.models?.news || mongoose.model("news", NewsSchma);
export default News;
