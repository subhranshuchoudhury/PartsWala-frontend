import React from "react";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import NewsletterList from "@/components/_admin/newsletter/newsletterList";

// Meta information
export const metadata = {
  title: "Newsletter - PartsWala",
  applicationName: "PartsWala",
  authors: "PartsWala",
};
export default function page() {
  return (
    <div>
      {" "}
      <HeaderBreadcrumbs
        admin
        heading="Newsletter List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "newsletter",
          },
        ]}
      />
      <NewsletterList />
    </div>
  );
}
