import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme_provider";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700",],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}
