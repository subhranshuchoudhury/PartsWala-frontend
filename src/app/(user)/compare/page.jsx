import React from "react";

// mui
import { Container } from "@mui/material";

// next
import dynamic from "next/dynamic";

// components
import HeaderBreadcrumbsSkeleton from "@/components/skeletons/breadcrumbs";
import Compare from "@/components/_main/compare";

// dynamic import
const HeaderBreadcrumbs = dynamic(
  () => import("@/components/headerBreadcrumbs"),
  {
    loading: () => <HeaderBreadcrumbsSkeleton />,
  }
);

export default function Page() {
  return (
    <Container maxWidth="xl">
      <HeaderBreadcrumbs
        heading="Compare"
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Compare",
          },
        ]}
      />
      <Compare />
    </Container>
  );
}
