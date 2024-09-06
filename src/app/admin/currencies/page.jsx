import React from "react";

// Components
import CurrencyList from "@/components/_admin/currencies/currencyList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// Meta information
export const metadata = {
  title: "Currencies - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function Currencies() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Currencies List"
        links={[
          {
            name: "Admin Dashboard",
            href: "/admin",
          },
          {
            name: "Currencies",
          },
        ]}
        action={{
          href: `/admin/currencies/add`,
          title: "Add currency",
        }}
      />
      <CurrencyList />
    </>
  );
}
