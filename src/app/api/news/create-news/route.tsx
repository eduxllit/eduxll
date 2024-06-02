import { storage } from "@/app/_firebase/config";
import { connect } from "@/app/dbConfig";
import News from "@/app/models/newsModels";
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
    const slug = generateSlug(formData.get("title") as string);

    if (featureImage) {
      const url = await uploadImagetoFirebase(featureImage as File);
      featuredImageUrl = url;
    }

    const newsData = {
      title: formData.get("title") as string,
      slug: slug,
      featureImage: featuredImageUrl,
      link: formData.get("link") as string,
      customCategory: customCategory,
    };

    const n = new News(newsData);
    const news = await n.save();

    return NextResponse.json({
      message: "News created successfully",
      success: true,
      news,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const uploadImagetoFirebase = async (image: File) => {
  const imgRef = ref(storage, `images/news/${image["name"]}`);
  const snapshot = await uploadBytesResumable(imgRef, image);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
};



function generateSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
