import "./globals.css";
import { getImageUrl } from "../lib/utils";

export const metadata = {
  title: "Exhibition, Retail & Interior Company | Your Company",
  description: "We provide exhibition, retail, interiors, signage & kiosk solutions across India & internationally",
  icons: {
    icon: getImageUrl("/cut_two_cutter_logo.svg"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}