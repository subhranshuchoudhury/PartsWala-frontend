import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import OrdersList from "@/components/_admin/orders/ordersList";

// Meta information
export const metadata = {
  title: "Order - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Orders List"
        links={[
          {
            name: "Dashboard",
            href: "/",
          },
          {
            name: "Orders",
          },
        ]}
      />
      <OrdersList isVendor />
    </div>
  );
}
