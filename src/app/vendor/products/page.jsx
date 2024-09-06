import React from "react";

// components
import ProductList from "@/components/_admin/products/productList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// Meta information
export const metadata = {
  title: "Products - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default async function AdminProducts() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Categories List"
        links={[
          {
            name: "Dashboard",
            href: "/",
          },
          {
            name: "Products",
          },
        ]}
        action={{
          href: `/vendor/products/add`,
          title: "Add Product",
        }}
      />
      <ProductList isVendor />
    </>
  );
}
