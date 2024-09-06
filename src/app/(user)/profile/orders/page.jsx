import React from "react";
import dynamic from "next/dynamic";

// mui
import { Container } from "@mui/material";

// components
import HeaderBreadcrumbsSkeleton from "@/components/skeletons/breadcrumbs";
import InvoiceSkeleton from "@/components/_main/skeletons/profile/invoice";

// dynamic import
const HeaderBreadcrumbs = dynamic(
  () => import("@/components/headerBreadcrumbs"),
  {
    loading: () => <HeaderBreadcrumbsSkeleton />,
  }
);
const InvoiceHistory = dynamic(
  () => import("@/components/_main/profile/invoiceHistory"),
  {
    loading: () => <InvoiceSkeleton />,
  }
);

// Meta information
export const metadata = {
  title: "Invoice | PartsWala - Your Order Details and Payment Confirmation",
  applicationName: "PartsWala",
  authors: "PartsWala",
};

export default async function OrderPage() {
  return (
    <Container>
      <HeaderBreadcrumbs
        heading="Orders"
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Profile",
            href: "/profile/orders",
          },
          {
            name: "Orders",
          },
        ]}
      />
      <InvoiceHistory />
    </Container>
  );
}
