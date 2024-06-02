import mongoose from "mongoose";



const customCategorySchema = new mongoose.Schema({
  value:{
    type: String,
  },
  label:{
    type: String,
  }
  
})



const BlogSchma = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
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
  featureImage: {
    type: String,
  },

  images: {
    type: [String],
  },
  mtitle: {
    type: String,
    required: [true, "Please provide a meta title"],
  },
  mdescription: {
    type: String,
    required: [true, "Please provide a meta description"],
  },

  customCategory: {
    type: [customCategorySchema],
  },
});

const Blog = mongoose?.models?.blogs || mongoose.model("blogs", BlogSchma);
export default Blog;
