import React from "react";

// mui
import { Toolbar } from "@mui/material";

// components
import Navbar from "@/layout/_main/navbar";
import Footer from "@/layout/_main/footer";
import Topbar from "@/layout/_main/topbar";
import ActionBar from "@/layout/_main/actionbar";

// Meta information
export const metadata = {
  title:
    "PartsWala E-commerce | Your Gateway to Seamless Shopping and Secure Transactions",
  description:
    "PartsWala is a website that offers a wide range of spare parts for cars, bikes, trucks, buses, heavy machinery, and other vehicles. We cater to the needs of small businesses and large enterprises alike, providing a solution for all your e-commerce needs. Our online store is designed to take your shopping experience to the next level, with a wide range of parts and accessories available for purchase. With PartsWala, you can shop online with confidence, knowing that your transactions are secure and your information is protected.",
  applicationName: "PartsWala",
  authors: "PartsWala",
  keywords:
    "PartsWala, Spare parts, Car parts, Bike parts, Truck parts, Bus parts, Heavy machinery parts, Automobile parts, Vehicle parts, Parts, Accessories, Online shopping, Online transactions, Small business, Large enterprise, Solution, E-commerce needs, Online store, Next level, PartsWala",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "PartsWala - Ecommerce",
    description: "PartsWala - Ecommerce",
    images: ["https://partswala-prod.vercel.app/logo300x200.png"],
  },
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <ActionBar />
      {children}
      <Toolbar sx={{ display: { xs: "block", md: "none" } }} />
      <Footer />
    </>
  );
}
