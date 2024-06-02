import React from "react";

import SideBarLayout from "../../../ui/sidebarlayout/page";

import EditFreeCourseForm from "@/app/components/free-Course/EditFreeCourseForm";
import FreeCourse from "@/app/models/freeCourse";

const getSingleBlogBySlug = async (slug: string) => {
  const data = await FreeCourse.findOne({ slug });
  const json = JSON.stringify(data);
  const blog = JSON.parse(json);
  return blog;
};

const page = async ({ params }: any) => {
  const slug = params.slug;
  const blog = await getSingleBlogBySlug(slug);

  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
          <EditFreeCourseForm data={blog} />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
