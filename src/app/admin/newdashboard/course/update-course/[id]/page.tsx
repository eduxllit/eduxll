
import UpdateCourse from "@/app/components/UpdateCourse";
import SideBarLayout from "../../../ui/sidebarlayout/page";
import Courses from "@/app/models/coursesModels";

const getSingleCoursebyId = async (id:string)=>{
  const response  = await Courses.findById(id)
  const json = JSON.stringify(response);
  const course = JSON.parse(json);
  return course;
}


const CreateCourse = async ({params}:any) => {
  
  const data = await getSingleCoursebyId(params?.id);






  return (
    <>
      <SideBarLayout>
        {/* {blogPopup && (
          <LinkModelBox
            buttonclose={() => setBlogPopup(false)}
            buttonsave={() =>
              router.push("/admin/newdashboard/course/course-list")
            }
            modelheading="Course"
            itemicon="sussess"
            modelcontent="Course Update Successfully"
          />
        )} */}
        <div className="flex items-center justify-between border-b-[1px] border-slate-200 px-[15px] pb-[15px] mb-[20px]">
          <h2>Update Course</h2>
        </div>

        <UpdateCourse data={data}/>

       

        
      </SideBarLayout>
    </>
  );
};
export default CreateCourse;
