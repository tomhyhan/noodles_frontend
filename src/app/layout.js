import localFont from 'next/font/local';
import './globals.css';
import { defaultMetadata } from './config/metadata';
import { defaultjsonld } from './config/jsonld';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  const jsonLd = defaultjsonld;

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen bg-amber-50 relative overflow-x-hidden flex flex-col justify-center`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <div className='absolute inset-0 -z-10 w-fill h-full'>
          <div className='absolute top-5 left-5 w-8 h-8 bg-amber-200 rounded-full opacity-50 animate-pulse' />
          <div className='absolute bottom-5 right-5 w-12 h-12 bg-amber-200 rounded-full opacity-50 animate-pulse' />
        </div>

        <footer className='w-full py-6 px-4 mt-auto flex justify-center items-center'>
          <p className='text-amber-900/80 text-sm'>
            © {new Date().getFullYear()} tomhyhan
          </p>
        </footer>
      </body>
    </html>
  );
}
