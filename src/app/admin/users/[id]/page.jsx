import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import UsersDetails from "@/components/_admin/users/userDetails";

export default function page({ params }) {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="User Details"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Users",
            href: "/admin/users",
          },
          {
            name: "Users details",
          },
        ]}
      />
      <UsersDetails id={params.id} />
    </>
  );
}
