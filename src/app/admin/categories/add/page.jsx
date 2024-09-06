import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AddCategory from "@/components/_admin/categories/addCategory";

// Meta information
export const metadata = {
  title: "Add Categories - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Categories List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Categories",
            href: "/admin/categories",
          },
          {
            name: "Add Category",
          },
        ]}
      />
      <AddCategory />
    </div>
  );
}
