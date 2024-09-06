import React from "react";
// guard
import AuthGuard from "@/guards/auth";
// mui
import { Box } from "@mui/material";
//  components
import OTPMain from "@/components/_main/auth/otp";

// Meta information
export const metadata = {
  title:
    "Verify Your Email with PartsWala | Confirm Your Account for Secure Shopping",
  description:
    "Complete the email verification process at PartsWala to ensure a secure and personalized shopping experience. Confirm your account and gain access to exclusive features. Shop confidently with a verified email. Verify now!",
  applicationName: "PartsWala",
  authors: "PartsWala",
  keywords:
    "ecommerce, PartsWala, Commerce, VerifyEmail PartsWala, VerifyEmail Page PartsWala",
};
export default async function VerifyOTP() {
  return (
    <>
      <AuthGuard>
        <Box className="auth-pages">
          <OTPMain />
        </Box>
      </AuthGuard>
    </>
  );
}
