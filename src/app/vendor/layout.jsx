import React from "react";

// guard
import VendorGuard from "@/guards/vendor";

// layout
import VendorLayout from "@/layout/_vendor";

export default function layout({ children }) {
  return (
    <VendorGuard>
      <VendorLayout>{children}</VendorLayout>
    </VendorGuard>
  );
}
