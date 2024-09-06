import React from "react";

// mui
import { Container } from "@mui/material";

// next
import dynamic from "next/dynamic";

// components
import Breadcrumbs from "@/components/skeletons/breadcrumbs";
import GeneralSkeleton from "@/components/_main/skeletons/profile/general";

// dynamic import
const AccountGeneral = dynamic(
  () => import("@/components/_main/profile/edit/accountGeneral"),
  {
    loading: () => <GeneralSkeleton />,
  }
);
const HeaderBreadcrumbs = dynamic(
  () => import("@/components/headerBreadcrumbs"),
  {
    loading: () => <Breadcrumbs />,
  }
);

// Meta information
export const metadata = {
  title:
    "PartsWala - Your Gateway to Seamless Shopping and Secure Transactions",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default function General() {
  return (
    <Container>
      <HeaderBreadcrumbs
        heading="General"
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Profile",
            href: "/profile/general",
          },
          {
            name: "General",
          },
        ]}
      />
      <AccountGeneral />
    </Container>
  );
}
