import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";

const work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ${siteConfig.name}'
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg'
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={work_Sans.className}>{children}</body>
      </html>
  );
}
