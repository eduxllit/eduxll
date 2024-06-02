
import React from "react";

import SideBarLayout from "../../../ui/sidebarlayout/page";
import EditNewsForm from "@/app/components/news/EditNewsForm";



const page = async () => {
   
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
         <EditNewsForm />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
