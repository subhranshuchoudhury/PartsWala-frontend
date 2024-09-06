import React from "react";

// components
import AdminShopForm from "@/components/forms/adminShop";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

export default function Page() {
  return (
    <>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: "Admin",
            href: "/admin",
          },
          {
            name: "Shops",
            href: "/admin/shops",
          },
          {
            name: "Add",
          },
        ]}
      />
      <AdminShopForm />
    </>
  );
}
