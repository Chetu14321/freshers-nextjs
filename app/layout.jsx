import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "FreshersJobs.shop | Freshers Jobs & Internships in India",
  description:
    "FreshersJobs.shop helps entry-level graduates find jobs and internships in India.",
  other: {
    "google-adsense-account": "ca-pub-3736460456527304",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
