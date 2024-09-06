import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import OrdersList from "@/components/_admin/orders/ordersList";

// api
import * as api from "@/services";

// Meta information
export const metadata = {
  title: "Order - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default async function page() {
  const { data: shops } = await api.getAllShopsByAdmin();
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Orders List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Orders",
          },
        ]}
      />
      <OrdersList shops={shops} />
    </div>
  );
}
