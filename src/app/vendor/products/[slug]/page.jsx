import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import EditProduct from "@/components/_admin/products/editProduct";

// api
import * as api from "@/services";
export const revalidate = 5;
export const dynamic = "auto";

export default async function page({ params }) {
  const { data: categories } = await api.getAllCategories();
  const { data: brands } = await api.getAllBrandsByAdmin();

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
      <EditProduct
        brands={brands}
        categories={categories}
        slug={params.slug}
        isVendor
      />
    </div>
  );
}
