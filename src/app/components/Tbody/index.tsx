"use client";
import React from "react";
import Button from "../button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import DeleteBlogButton from "../blog/DeleteBlogButton";

type TbodyProps = {
  response: any;
};

const Tbody = ({ response }: any) => {
  // need when user click on show more button load other 10 data and in starting it will show 10 data
  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(11);
  const [currentPosts, setCurrentPosts] = React.useState(response.slice(0, 11));
  const handleClick = () => {
    setCurrentPosts(response.slice(0, currentPage * postsPerPage));
    setCurrentPage(currentPage + 1);
  };

  React.useEffect(() => {
    setCurrentPosts(response.slice(0, 11));
  }, [response]);

  console.log("currentPosts", { currentPosts });

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
      <tbody>
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
      </tbody>

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
          {currentPosts?.length === 1 ? " No More Data" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default Tbody;
