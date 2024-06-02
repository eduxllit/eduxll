
import React from "react";

import SideBarLayout from "@/app/admin/newdashboard/ui/sidebarlayout/page";
import EditFreeMasterForm from "@/app/components/freeMaster/EditFreeMasterForm";



const page = async () => {
   
  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
         <EditFreeMasterForm />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
