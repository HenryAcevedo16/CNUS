import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Escuela CNUS - Formación Sindical Sociopolítica",
  description: "Formación sindical sociopolítica para transformar la República Dominicana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900" suppressHydrationWarning>
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
