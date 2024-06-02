import Study from "@/app/models/studyAbroad";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const query = params.query as string;
  try {
    const study = await Study.find({
      courseBranch: {
        $elemMatch: {
          value: { $regex: new RegExp(query, "i") },
        },
      },
    });
    return NextResponse.json(study, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
