import Head from 'next/head';
import "../globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-sky-400 p-4 text-center text-2xl">
          <h1>Header</h1>
        </header>
        {children}
        <footer className="bg-red-600 p-4 text-center text-2xl">
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
