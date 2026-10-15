import type { Metadata } from "next";
import "./reference.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "XTASKR — Autonomous robotics for real work",
  description: "XTASKR homepage preview. Autonomous robotics for real work.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="home page-template-template-homepage page page-id-137 theme-mechorix no-wc-breadcrumb elementor-default elementor-kit-6 elementor-page elementor-page-137">
        {children}
      </body>
    </html>
  );
}
