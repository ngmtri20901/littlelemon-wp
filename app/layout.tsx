import type { Metadata } from "next";
import "./globals.css";
import { Inter, Sacramento, Tiro_Devanagari_Hindi } from "next/font/google";

import ApolloWrapper from "@/components/ApolloWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { CompareProvider } from "@/context/compare-context";
import MainLayout from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import ToastProvider from "@/components/ToastProvider"   
import FaustWrapper from "@/components/FaustWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});
const tiro = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tiro",
});

export const metadata: Metadata = {
  title: "Little Lemon",
  description: "Mediterranean restaurant",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sacramento.variable} ${tiro.variable}`}
    >
      <body
        className={`${inter.className} ${sacramento.className} ${tiro.className}`}
      >
          <ApolloWrapper>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <CartProvider>
                <WishlistProvider>
                  <CompareProvider>
                    <MainLayout>{children}</MainLayout>
                  </CompareProvider>
                </WishlistProvider>
              </CartProvider>
            </ThemeProvider>
          </ApolloWrapper>
          <ToastProvider />
          </body>
    </html>
  );
}
