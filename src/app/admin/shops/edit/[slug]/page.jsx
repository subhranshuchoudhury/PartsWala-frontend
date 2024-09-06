"use client";
import React from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

// components
import EditAdminShopForm from "@/components/forms/adminShop";
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";

// api
import * as api from "@/services";
import { useQuery } from "react-query";

Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Page({ params }) {
  const { data, isLoading } = useQuery(
    ["coupon-codes"],
    () => api.getShopDetailsByAdmin(params.slug),
    {
      onError: (err) => {
        toast.error(err.response.data.message || "Something went wrong!");
      },
    }
  );
  return (
    <>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: "Admin",
            href: "/admin",
          },
          {
            name: "Shops",
            href: "/admin/shops",
          },
          {
            name: "Edit",
          },
        ]}
      />
      <EditAdminShopForm data={data?.data} isLoading={isLoading} />
    </>
  );
}
