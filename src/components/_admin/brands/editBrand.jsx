import React from "react";
// components
import BrandsForm from "@/components/forms/brand";

export default function addBrand({ data, isLoading }) {
  return (
    <div>
      <BrandsForm data={data} isLoading={isLoading} />
    </div>
  );
}
