import React from "react";
import PropTypes from "prop-types";

// components
import ShopSettingFrom from "@/components/forms/shopSetting";
ShopSettingMain.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};
export default function ShopSettingMain({ data, isLoading }) {
  return (
    <div>
      <ShopSettingFrom isLoading={isLoading} data={data} />
    </div>
  );
}
