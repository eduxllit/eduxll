// generate courses schema
import mongoose, { Schema } from "mongoose";

const CourseModuleSchema = new Schema({
  id: { type: Number },
  modulTitle: { type: String, trim: true },
  modulDescription: { type: String, trim: true },
});
const CourseFaqSchema = new Schema({
  id: { type: Number },
  modulTitle: { type: String, trim: true },
  modulDescription: { type: String, trim: true },
});

const customCategorySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const featureCategorySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const CourseBranchSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  duration: {
    type: String,
    required: true,
    default: "",
  },

  coursePrice: {
    type: String,
    required: true,
    default: "",
  },
  semesterPrice: {
    type: String,
    required: true,
    default: "",
  },
  priceContent: {
    type: String,
    required: true,
    default: "",
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: { true: "Please provide a slug" },
    unique: true,
  },

  certificateDescription: {
    type: String,
    required: true,
    trim: true,
  },
  universityDescription: {
    type: String,
    required: true,
    trim: true,
  },

  metaTitle: {
    type: String,
    required: true,
    trim: true,
  },

  metaDescription: {
    type: String,
    required: true,
    trim: true,
  },
  logoOnedescription: {
    type: String,
    required: false,
    trim: true,
  },
  logoTwodescription: {
    type: String,
    required: false,
    trim: true,
  },

  price: {
    type: Number,
  },

  courseImage: {
    type: String,
    default: "",
  },
  universityImage: {
    type: String,
    default: "",
  },
  universityLogo: {
    type: String,
    default: "",
  },
  logoOne: {
    type: String,
    default: "",
  },
  logoTwo: {
    type: String,
    default: "",
  },

  brochure: {
    type: String,
    default: "",
  },

  certificate: {
    type: String,
    default: "",
  },

  courseModule: {
    type: [CourseModuleSchema],
    default: [],
  },
  courseFaq: {
    type: [CourseFaqSchema],
    default: [],
  },

  customCategory: {
    type: [customCategorySchema],
    default: [],
  },

  courseBranch: {
    type: [CourseBranchSchema],
    default: [],
  },

  featureCategoryInsert: {
    type: [featureCategorySchema],
    default: [],
  },
});
const Study = mongoose?.models?.study || mongoose.model("study", coursesSchema);

export default Study;
