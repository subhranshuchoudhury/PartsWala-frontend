import React from "react";
import dynamic from "next/dynamic";

// dynamic import
const Search = dynamic(() => import("@/components/dialog/search/search"));

export default function Searchs() {
  return <Search mobile />;
}
