import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClimateCraft",
  description: "Your guide to weather mastery, tailored forecasts for every journey",
  author: "Harsh Kothari",
  keywords: ["weather app", "forecasting", "climate", "weather insights", "next.js"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
