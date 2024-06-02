"use client";
import React, { useState } from "react";
import axios from "axios";
import SideBarLayout from "../ui/sidebarlayout/page";
import CreateBlogfname from "../blog/CreateBlogForm";
import Webinar from "../webinar/CreateWebinar";

const page = () => {
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
          <Webinar />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
