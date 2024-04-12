import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "HB SOFT - Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
