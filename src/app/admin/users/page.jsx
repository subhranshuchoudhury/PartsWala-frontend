import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import UsersList from "@/components/_admin/users/userList";

// Meta information
export const metadata = {
  title: "User - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function page() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Users List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Users",
          },
        ]}
      />
      <UsersList />
    </>
  );
}
