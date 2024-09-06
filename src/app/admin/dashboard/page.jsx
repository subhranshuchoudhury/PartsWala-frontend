import React from "react";

// components
import Dashboard from "@/components/_admin/dashboard";

// Meta information
export const metadata = {
  title: "PartsWala - Dashboard",
  description:
    "Welcome to the PartsWala Dashboard. Manage your e-commerce operations with ease.",
  applicationName: "PartsWala Dashboard",
  authors: "PartsWala",
  keywords: "dashboard, e-commerce, management, PartsWala",
  icons: {
    icon: "/favicon.png",
  },
};

export default function page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
