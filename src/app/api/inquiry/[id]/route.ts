import Inquiry from "@/app/models/inquiryModel";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id as string;

  console.log("sahil serveer id", id);
  try {
    const deletedCourse = await Inquiry.findByIdAndDelete(id);
    if (!deletedCourse) {
      return NextResponse.json({ error: "No Course Found" }, { status: 500 });
    }
    return NextResponse.json(deletedCourse, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
