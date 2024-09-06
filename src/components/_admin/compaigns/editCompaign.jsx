import React from "react";
// components
import CompaignForm from "@/components/forms/compaign";

export default function editCompaign({ data, isLoading }) {
  return (
    <div>
      <CompaignForm data={data} isLoading={isLoading} />
    </div>
  );
}
