import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import PayoutsList from "@/components/_admin/payouts";

// api
import * as api from "@/services";

// Meta information
export const metadata = {
  title: "Payouts - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default async function page() {
  const { data: shops } = await api.getAllShopsByAdmin();
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Payouts"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Payouts",
          },
        ]}
      />
      <PayoutsList shops={shops} />
    </div>
  );
}
