import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AccountGeneral from "@/components/_main/profile/edit/accountGeneral";

// Meta information
export const metadata = {
  title: "Setting - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: "Dashboard",
            href: "/",
          },
          {
            name: "Settings",
          },
        ]}
        action={{
          href: `/vendor/settings/shop`,
          title: "Shop Setting",
        }}
      />
      <AccountGeneral />
    </div>
  );
}
