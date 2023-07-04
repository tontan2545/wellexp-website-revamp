import Header from "@/components/layout/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col min-h-screen", poppins.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
