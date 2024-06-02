import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import axios from "axios";
import CreateBlogForm from "@/app/components/blog/CreateBlogForm";

const page = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4">
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default page;
