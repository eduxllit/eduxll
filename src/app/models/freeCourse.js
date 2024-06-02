import mongoose from "mongoose";

const customCategorySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const FreeCourseSchma = new mongoose.Schema({
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

  price: {
    type: String,
    required: [true, "Please provide a price"],
  },
  student: {
    type: String,
    required: [true, "Please provide a student"],
  },
  brochure: {
    type: String,
    default: "",
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

const FreeCourse =
  mongoose?.models?.freecourses ||
  mongoose.model("freecourses", FreeCourseSchma);
export default FreeCourse;
