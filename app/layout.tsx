import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brian Cabrera — Founder building Biolink",
  description:
    "Brian Cabrera. Founder building Biolink, a biometric identity layer for physical commerce.",
  authors: [{ name: "Brian Cabrera" }],
  creator: "Brian Cabrera",
  openGraph: {
    title: "Brian Cabrera — Founder building Biolink",
    description:
      "A biometric identity layer for physical commerce.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Cabrera",
    description:
      "Founder building Biolink — a biometric identity layer for physical commerce.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0c",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="bg-bg font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
