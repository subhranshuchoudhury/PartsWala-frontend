import React from "react";

// components
import AddCompaign from "@/components/_admin/compaigns/addCompaign";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Compaigns List"
        links={[
          {
            name: "Admin Dashboard",
            href: "/admin",
          },
          {
            name: "Compaigns",
            href: "/admin/compaigns",
          },
          {
            name: "Add Compaign",
          },
        ]}
      />
      <AddCompaign />
    </div>
  );
}
