import React from "react";

// components
import AddCurrency from "@/components/_admin/currencies/addCurrency";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Currency List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Currencies",
            href: "/admin/currencies",
          },
          {
            name: "Add Currency",
          },
        ]}
      />
      <AddCurrency />
    </div>
  );
}
