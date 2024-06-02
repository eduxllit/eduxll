import { storage } from "@/app/_firebase/config";
import { connect } from "@/app/dbConfig";
import Web from "@/app/models/webinar";
import Webinar from "@/app/models/webinar";
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
    const featureImage = formData.get("featureImage");
    const customCategory = JSON.parse(formData.get("customCategory") as string);


    let featuredImageUrl = "";
    const slug = generateSlug(formData.get("name") as string);

    if (featureImage) {
      const url = await uploadImagetoFirebase(featureImage as File);
      featuredImageUrl = url;
    }

    const userImage = formData.get("image");

    let userImageUrl = "";
    if (userImage) {
      const url = await uploadImagetoFirebase(userImage as File);
      userImageUrl = url;
    }

    const webinarBody = {
      name: formData.get("name") as string,
      ptitle: formData.get("ptitle") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      ylink: formData.get("ylink") as string,
      featureImage: featuredImageUrl,
      customCategory: customCategory,
      image: userImageUrl,
      slug: slug,
      mtitle: formData.get("mtitle") as string,
      mdescription: formData.get("mdescription") as string,
    };

    const w = new Web(webinarBody);
    const newWebinar = await w.save();

    return NextResponse.json({
      message: "Webinar created successfully",
      success: true,
      newWebinar,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const uploadImagetoFirebase = async (image: File) => {
  const imgRef = ref(storage, `images/webinar/${image["name"]}`);
  const snapshot = await uploadBytesResumable(imgRef, image);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};

const findBlogAndUpdateImage = async (id: string, imageUrl: string) => {
  try {
    const blog = await Web.findById(id);
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
