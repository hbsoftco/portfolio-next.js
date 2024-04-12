import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";

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
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
