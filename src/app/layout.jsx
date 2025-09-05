import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
