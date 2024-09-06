import React from "react";

// components
import ShopList from "@/components/_admin/shops/shopList";
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
        heading="Shops"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Shops",
          },
        ]}
        action={{
          href: `/admin/shops/add`,
          title: "Add Shop",
        }}
      />
      <ShopList />
    </>
  );
}
