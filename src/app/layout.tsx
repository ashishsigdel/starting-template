import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { CustomThemeProvider, StoreProvider } from "@/providers";
import { ToastUtils } from "@/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://127.0.0.1:3000"),

  title: "Title",
  description: "Description",
  keywords: "keywords",
  openGraph: {
    type: "website",
    url: "https://127.0.0.1:3000",
    siteName: "Site Name | Title",
    title: "Site Name | Title",
    description: "Description",
    images: "/logo.jpg",
  },
  twitter: {
    site: "@sitename",
    card: "summary_large_image",
    description: "Description",
    title: "Site Name | Title",
    images: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body suppressHydrationWarning={true} className="dark:dark-background">
          <CustomThemeProvider>{children}</CustomThemeProvider>

          <ToastUtils />
        </body>
      </html>
    </StoreProvider>
  );
}
