import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AddProduct from "@/components/_admin/products/addProduct";

// api
import * as api from "@/services";

export const revalidate = 0;
export const dynamic = "auto";

export default async function page() {
  const { data: categories } = await api.getAllCategories();
  const { data: brands } = await api.getAllBrandsByAdmin();
  const { data: shops } = await api.getAllShopsByAdmin();

  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Product List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Products",
            href: "/admin/products",
          },
          {
            name: "Add Product",
          },
        ]}
      />
      <AddProduct brands={brands} shops={shops} categories={categories} />
    </div>
  );
}
