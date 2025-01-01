import { PastaImage } from '@/components/PastaResult';
import { pastaData } from '@/lib/pastaData';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { noodles: 'Spaghetti' },
    { noodles: 'Fettuccine' },
    { noodles: 'Penne' },
    { noodles: 'Rigatoni' },
    { noodles: 'Macaroni' },
    { noodles: 'Linguine' },
    { noodles: 'Farfalle' },
    { noodles: 'Tagliatelle' },
    { noodles: 'Fusilli' },
    { noodles: 'Orzo' },
    { noodles: 'Conchiglie' },
    { noodles: 'Bucatini' },
    { noodles: 'Orecchiette' },
    { noodles: 'Ravioli' },
    { noodles: 'Tortellini' },
    { noodles: 'Fregola' },
  ];
}

export default async function Page({ params }) {
  const noodles = (await params).noodles;

  return (
    <main className='container mx-auto px-4 py-8 '>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='mb-6'>
          <span className='text-sm font-medium text-amber-800 uppercase tracking-wider'>
            Result
          </span>
          <h1 className='text-4xl font-bold text-amber-950 mt-2 mb-4'>
            {noodles}
          </h1>
        </div>

        <PastaImage />

        <div className='bg-amber-50 p-6 rounded-xl shadow-sm'>
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-amber-900'>
              About This Pasta
            </h2>
            <p className='text-amber-800 text-lg leading-relaxed'>
              {pastaData[noodles]}
            </p>
          </div>

          <Link href='/' className='mt-8 flex justify-center'>
            <button className='bg-amber-600 text-amber-50 px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors'>
              Try Another Image
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export const dynamicParams = false;
