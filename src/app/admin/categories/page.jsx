import React from "react";

// Components
import CategoryList from "@/components/_admin/categories/categoryList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// Meta information
export const metadata = {
  title: "Categories - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default function Categories() {
  return (
    <>
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
          },
        ]}
        action={{
          href: `/admin/categories/add`,
          title: "Add Category",
        }}
      />

      <CategoryList />
    </>
  );
}
