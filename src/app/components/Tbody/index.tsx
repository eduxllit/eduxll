"use client";
import React from "react";
import Button from "../button/Button";
import DeleteBlogButton from "../blog/DeleteBlogButton";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

type TbodyProps = {
  response: any;
};

const Tbody = ({ response }: any) => {
  // need when user click on show more button load other 10 data and in starting it will show 10 data
  const router = useRouter();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);
  const [currentPosts, setCurrentPosts] = React.useState(response.slice(0, 10));
  const handleClick = () => {
    setCurrentPosts(response.slice(0, currentPage * postsPerPage));
    setCurrentPage(currentPage + 1);
  };

  const handleDeleteBlog = async (id: any) => {
    console.log("sahil id check", id);
    try {
      const response = await axios.delete(`/api/inquiry/${id}`);
      if (response.status === 200) {
        // alert("Deleted Successfully");
      }

      router.push("/admin/newdashboard/inquires");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div>
    {currentPosts?.map((user: any, index: any) => { 
      return(
<>
<span>
  <div>

  first name : {user?.name}
  </div>
  <div>

  Email : {user?.email}
  </div>
  <div>

  Phone : {user?.phone} 
  </div>
  <div>

  Course Name : {user?.courseName}
  </div>

</span>
</>
      )
    }
    )}
    </div>
      {/* <tbody>
        {currentPosts?.map((user: any, index: any) => {
          const id = user?._id.toString();
          return (
            <>
              <tr className="bg-white border-b border-dashed dark:bg-dark-card dark:border-gray-700">
                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue">
                  <div
                    className="titlemet titlemet line-clamp-1 max-w-[200px]"
                    title={user?.name}
                  >
                    {user?.name}
                  </div>
                </td>
                <td className="p-3  text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  <div
                    className="titlemet line-clamp-1 max-w-[200px]"
                    title={user?.email}
                  >
                    {user?.email}
                  </div>
                </td>

                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  {user?.phone}
                </td>
                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  <div className="flex gap-[10px]">{user?.work_experience}</div>
                </td>
                <td
                  className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue"
                  key={index}
                >
                  {user?.courseName}
                </td>
                <td
                  className="p-3 text-sm font-medium whitespace-nowrap dark:text-blue"
                  key={index}
                >
                  <DeleteBlogButton id={id} model="inquiry" />
                </td>
              </tr>
            </>
          );
        })}

        {response?.map((blog: any, index: any) => {
          return <></>;
        })}
      </tbody> */}

      <div>
        <button
          onClick={handleClick}
          className="bg-[#002e5e] text-[#fff] px-[20px] py-[10px] uppercase !rounded-none"
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          {currentPosts?.length === 1 ? "Show More" : "No More Data"}
        </button>
      </div>
    </>
  );
};

export default Tbody;
