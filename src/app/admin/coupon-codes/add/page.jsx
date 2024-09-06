import React from "react";

import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import AddCouponCode from "@/components/_admin/couponCodes/addCouponCode";
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Coupon Code List"
        links={[
          {
            name: "Dashboard",
            href: "/admin",
          },
          {
            name: "Coupon code",
            href: "/admin/coupon-code",
          },
          {
            name: "Add coupon code",
          },
        ]}
      />
      <AddCouponCode />
    </div>
  );
}
