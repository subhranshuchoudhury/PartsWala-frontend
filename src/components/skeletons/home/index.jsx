import React from "react";
// MUI
import { Container } from "@mui/material";
// Components
import HeroSkeleton from "@/components/skeletons/home/hero";
import CategoriesSkeleton from "@/components/skeletons/home/categories";
import TopBanners from "./topBanners";

export default function HomeSkeleton() {
  return (
    <>
      <HeroSkeleton />
      <Container maxWidth="xl">
        <TopBanners />
        <CategoriesSkeleton />
      </Container>
    </>
  );
}
