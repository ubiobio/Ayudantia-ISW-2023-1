import Layout from '@/components/Layout';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ejemplo CRUD',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Layout />
        </header>
        {/* centrar el main */}
        <main className="flex items-start justify-center w-screen">
          {children}
        </main>
      </body>
    </html>
  );
}