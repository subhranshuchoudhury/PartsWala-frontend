import React from "react";

// Components
import BrandList from "@/components/_admin/brands/brandList";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// Meta information
export const metadata = {
  title: "Brands - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default function Brands() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Brands List"
        links={[
          {
            name: "Admin Dashboard",
            href: "/admin",
          },
          {
            name: "Brands",
          },
        ]}
        action={{
          href: `/admin/brands/add`,
          title: "Add brand",
        }}
      />
      <BrandList />
    </>
  );
}
