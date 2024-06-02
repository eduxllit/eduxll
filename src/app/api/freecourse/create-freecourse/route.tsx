import { storage } from "@/app/_firebase/config";
import { connect } from "@/app/dbConfig";
import FreeCourse from "@/app/models/freeCourse";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const customCategory = JSON.parse(formData.get("customCategory") as string);

    const featureImage = formData.get("featureImage");

    let featuredImageUrl = "";
    const slug = generateSlug(formData.get("title") as string);

    if (featureImage) {
      const url = await uploadImagetoFirebase(featureImage as File);
      featuredImageUrl = url;
    }
    const brochureUpload = formData.get("brochure");
    let broucher = "";
    if (brochureUpload) {
      const brochureUrl = await uploadImagetoFirebase(brochureUpload as File);
      broucher = brochureUrl;
    }

    const freeCourse = {
      title: formData.get("title") as string,
      slug: slug,
      content: formData.get("content") as string,
      featureImage: featuredImageUrl,
      brochure: broucher,
      mtitle: formData.get("mtitle") as string,
      mdescription: formData.get("mdescription") as string,
      price: formData.get("price") as string,
      student: formData.get("student") as string,
      customCategory: customCategory,
      timestamps: formData.get("timestamps") as string,
    };

    const b = new FreeCourse(freeCourse);
    const newBlog = await b.save();

    return NextResponse.json({
      message: "Free Course created successfully",
      success: true,
      newBlog,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const uploadImagetoFirebase = async (image: File) => {
  const imgRef = ref(storage, `images/blog/${image["name"]}`);
  const snapshot = await uploadBytesResumable(imgRef, image);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};

const findBlogAndUpdateImage = async (id: string, imageUrl: string) => {
  try {
    const blog = await FreeCourse.findById(id);
    if (blog) {
      blog.featureImage = imageUrl;
      await blog.save();
    }
    return blog;
  } catch (error) {
    return error;
  }
};

function generateSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
