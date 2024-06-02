"use client";
import React, { useState } from "react";
import axios from "axios";
import SideBarLayout from "../../ui/sidebarlayout/page";
import CreateNewsForm from "../../news/CreateNewsForm";

const page = () => {
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
          <CreateNewsForm />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
