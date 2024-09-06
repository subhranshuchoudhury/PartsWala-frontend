import React from "react";

// guard
import AdminGuard from "@/guards/admin";

// layout
import DashboardLayout from "@/layout/_admin";

export default function layout({ children }) {
  return (
    <AdminGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AdminGuard>
  );
}
