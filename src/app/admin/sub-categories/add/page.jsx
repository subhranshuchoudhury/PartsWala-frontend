import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AddSubCategory from "@/components/_admin/subCategories/addCategory";

// api
import * as api from "@/services";

export const revalidate = 0;
export const dynamic = "auto";

export default async function page() {
  const data = await api.getAllCategories();
  if (!data) {
    notFound();
  }
  const { data: categories } = data;
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Sub Categories List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Sub Categories",
            href: "/admin/sub-categories",
          },
          {
            name: "Add Sub Category",
          },
        ]}
      />
      <AddSubCategory categories={categories} />
    </div>
  );
}
