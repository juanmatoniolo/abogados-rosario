import NavbarAbogado from "@/components/NavbarAbogado";
import "./globals.css";
import FooterAbogado from "@/components/FooterLaw";

export const metadata = {
  title: "Mi App",
  description: "Aplicación con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className="bg-gray-100 text-gray-800 antialiased">
        <NavbarAbogado/>
        {children}

        <FooterAbogado/>
      </body>
    </html>
  );
}
