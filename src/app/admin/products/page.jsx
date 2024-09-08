import React from "react";

// components
import ProductList from "@/components/_admin/products/productList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// api
import * as api from "@/services";

export const revalidate = 0;
export const dynamic = "auto";

// Meta information
export const metadata = {
  title: "Products - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default async function AdminProducts() {
  const { data: categories } = await api.getAllCategoriesByAdmin();
  const { data: brands } = await api.getAllBrandsByAdmin();
  const { data: shops } = await api.getAllShopsByAdmin();

  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Products List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Products",
          },
        ]}
        action={{
          href: `/admin/products/add`,
          title: "Add Product",
        }}
      />
      <ProductList categories={categories} shops={shops} brands={brands} />
    </>
  );
}
