import React from "react";
// guard
import GuestGuard from "@/guards/guest";
// mui
import { Card, Stack, Container, Typography } from "@mui/material";
// components
import LoginMain from "@/components/_main/auth/login";

// Meta information
export const metadata = {
  title:
    "Login to PartsWala | Your Gateway to Seamless Shopping and Secure Transactions",
  description:
    "Log in to PartsWala for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!",
  applicationName: "PartsWala",
  authors: "PartsWala",
  keywords:
    "ecommerce, PartsWala, Commerce, Login PartsWala, LoginFrom PartsWala",
};

export default async function Login() {
  return (
    <>
      <GuestGuard>
        <Container maxWidth="sm">
          <Card
            sx={{
              maxWidth: 560,
              m: "auto",
              my: "80px",
              flexDirection: "column",
              justifyContent: "center",
              p: 3,
            }}
          >
            <Stack mb={5}>
              <Typography
                textAlign="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Login
              </Typography>
              <Typography textAlign="center" color="text.secondary">
                Login to your account to continue
              </Typography>
            </Stack>

            <LoginMain />
          </Card>
        </Container>
      </GuestGuard>
    </>
  );
}
