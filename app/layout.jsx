import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "FreshersJobs.shop | Freshers Jobs & Internships in India",
  description:
    "FreshersJobs.shop helps entry-level graduates find jobs and internships in India.", // :contentReference[oaicite:0]{index=0}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense – replace with your client ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
