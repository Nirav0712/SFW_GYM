import type { Metadata } from "next";
import { Inter, Outfit, Zen_Dots } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const zenDots = Zen_Dots({ weight: "400", subsets: ["latin"], variable: "--font-zen-dots" });

export const metadata: Metadata = {
  title: "SFW Hirawadi Gym | Premium Fitness Center in Ahmedabad",
  description: "Experience world-class fitness at SFW Hirawadi Gym. Join the best gym in Hirawadi, Ahmedabad for personal training, yoga, cardio, and muscle building.",
  keywords: ["Gym", "Fitness", "SFW Hirawadi", "Ahmedabad Gym", "Workout", "Personal Training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${zenDots.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
