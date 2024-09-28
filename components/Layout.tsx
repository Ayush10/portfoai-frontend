// components/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import "../app/globals.css"; // Adjust the path as needed

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex justify-between items-center px-16 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
