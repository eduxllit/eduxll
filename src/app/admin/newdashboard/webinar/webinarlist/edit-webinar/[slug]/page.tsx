
import React from "react";

import SideBarLayout from "@/app/admin/newdashboard/ui/sidebarlayout/page";
import EditWebinarForm from "@/app/components/webniar/EditWebniarForm";



const page = async () => {
   
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
         <EditWebinarForm />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
