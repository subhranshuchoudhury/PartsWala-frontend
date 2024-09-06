import React from "react";

// components
import SubCategoryList from "@/components/_admin/subCategories/categoryList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// apo
import * as api from "@/services";
export const revalidate = 0;
export const dynamic = "error";

// Meta information
export const metadata = {
  title: "Sub Categories - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default async function Categories() {
  const { data: categories } = await api.getAllCategoriesByAdmin();
  return (
    <>
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
          },
        ]}
        action={{
          href: `/admin/sub-categories/add`,
          title: "Add Sub Category",
        }}
      />
      <SubCategoryList categories={categories} />
    </>
  );
}
