import NavbarAbogado from "@/components/NavbarAbogado";
import "./globals.css";

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
      </body>
    </html>
  );
}
