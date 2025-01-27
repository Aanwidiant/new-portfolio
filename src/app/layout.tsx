// import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layouts/client-layout";
import React from "react";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://sukses-mandiri.my.id/"),
//   title: "Sukses Mandiri Alka",
//   description: "Website UMKM Sukses Mandiri Aluminium dan Kaca",
//   keywords: ["aluminium", "kaca", "umkm"],
//   openGraph: {
//     title: "Sukses Mandiri Alka",
//     description: "Website UMKM Sukses Mandiri Aluminium dan Kaca",
//     url: "https://sukses-mandiri.my.id/",
//     siteName: "Sukses Mandiri Alka",
//     images: ["/image/logo/logo.svg"],
//   },
//   icons: {
//     icon: [
//       { url: "/image/logo/logo.svg", type: "image/svg+xml" },
//       { url: "/image/logo/logo.png", type: "image/png" },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-light-bg dark:bg-dark-bg">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
