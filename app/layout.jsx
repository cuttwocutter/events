import "./globals.css";
import { getImageUrl } from "../lib/utils";

export const metadata = {
  title: "Exhibition, Retail & Interior Company | Your Company",
  description:
    "We provide exhibition, retail, interiors, signage & kiosk solutions across India & internationally",
  icons: {
    icon: getImageUrl("/cut_two_cutter_logo.svg"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 py-6 text-center text-sm">
          © {new Date().getFullYear()} Cut Two Cutter. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
