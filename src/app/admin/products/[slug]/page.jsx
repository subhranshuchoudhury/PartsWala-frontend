import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import EditProduct from "@/components/_admin/products/editProduct";

// api
import * as api from "@/services";

export const revalidate = 0;
export const dynamic = "auto";

export default async function page({ params }) {
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
      <EditProduct
        brands={brands}
        shops={shops}
        categories={categories}
        slug={params.slug}
      />
    </div>
  );
}
