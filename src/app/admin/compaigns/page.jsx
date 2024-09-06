import React from "react";

// Components
import CompaignList from "@/components/_admin/compaigns/compaignList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// Meta information
export const metadata = {
  title: "Compaigns - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function Compaigns() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Compaigns List"
        links={[
          {
            name: "Admin Dashboard",
            href: "/admin",
          },
          {
            name: "Compaigns",
          },
        ]}
        action={{
          href: `/admin/compaigns/add`,
          title: "Add Compaign",
        }}
      />
      <CompaignList />
    </>
  );
}
