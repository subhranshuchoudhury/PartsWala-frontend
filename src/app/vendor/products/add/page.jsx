import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AddProduct from "@/components/_admin/products/addProduct";

// api
import * as api from "@/services";
export const revalidate = 0;
export const dynamic = "error";

export default async function page() {
  const data1 = await api.getAllCategories();
  const data2 = await api.getAllBrandsByAdmin();
  if (!data1 && data2) {
    notFound();
  }
  const { data: categories } = data1;
  const { data: brands } = data2;

  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Product List"
        links={[
          {
            name: "Dashboard",
            href: "/",
          },
          {
            name: "Products",
            href: "/dashboard/products",
          },
          {
            name: "Add Product",
          },
        ]}
      />
      <AddProduct brands={brands} categories={categories} isVendor />
    </div>
  );
}
