"use client";
import React, { useState } from "react";
// import { Input, Textarea, Button } from "@nextui-org/react";
import axios from "axios";
import SideBarLayout from "../ui/sidebarlayout/page";
import CreateBlogfname from "../blog/CreateBlogForm";

const page = () => {
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
          <CreateBlogfname />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
