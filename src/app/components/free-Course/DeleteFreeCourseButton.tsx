"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type tProps = {
  id: string;
  model: string;
};

const DeleteFreeCourseButton = ({ id, model }: tProps) => {
  const router = useRouter();

  console.log("nehat id", id);

  const handleDeleteBlog = async () => {
    try {
      const response = await axios.delete(`/api/${model}/${id}`);
      if (response.status === 200) {
        alert("Deleted Successfully");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className=" hover:bg-slate-200 rounded-[50px] w-[30px] h-[30px] flex items-center justify-center cursor-pointer"
      onClick={handleDeleteBlog}
    >
      <Image src="/delete-bin-line.svg" width={15} height={15} alt="delete" />
    </button>
  );
};

export default DeleteFreeCourseButton;
