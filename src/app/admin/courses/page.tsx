"use client";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Courses = () => {
  const router = useRouter();
  return (
    <div className="p-4">
      <Link
        href="/admin/courses/create-course"
        className="py-2 px-6 bg-black text-white rounded-md"
      >
        Create Course
      </Link>
      {/* <Button text={"Create course"} onClick={()=>router.push("/admin/courses/create-course")} /> */}
    </div>
  );
};
export default Courses;
