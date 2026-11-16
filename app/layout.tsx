import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Lab — учебный проект',
  description: 'Практика Next.js с нуля',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='ru' className='h-full antialiased'>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
