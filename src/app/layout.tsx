import "./globals.css";
import ClientLayout from "@/components/layouts/client-layout";
import React from "react";
import { ThemeProvider } from "@/contexts/theme-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth transition duration-300 ease-in-out">
      <body className="bg-light-etd dark:bg-dark-etd text-dark dark:text-light">
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
