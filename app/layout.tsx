import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";


const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  }
};
// this allows us to use this font all all of our pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
