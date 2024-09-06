import * as React from "react";
import Providers from "@/providers";
import "simplebar-react/dist/simplebar.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang={"en-US"}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
