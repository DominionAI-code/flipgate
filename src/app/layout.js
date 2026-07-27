import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FLIPGATE LTD | National Reorientation & Social Impact",
  description:
    "Official digital platform for FLIPGATE LTD. Inspiring national reorientation, community development, and sustainable social impact.",
  icons: {
    icon: "/favicon.png", // Points directly to public/favicon.png
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add suppressHydrationWarning here to mute browser extension noise */}
      <body
        className="antialiased flex flex-col min-h-screen bg-white text-[#1F2937]"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
