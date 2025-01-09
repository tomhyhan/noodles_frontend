import { PastaImageResult } from '@/components/PastaResult';
import { pastaData } from '@/lib/pastaData';
import Link from 'next/link';
import { pastajsonld } from '../config/jsonld';
import { Suspense } from 'react';

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

export async function generateMetadata({ params }) {
  const noodles = (await params).noodles;

  return {
    title: noodles,
  };
}

export default async function Page({ params }) {
  const noodles = (await params).noodles;
  const description = pastaData[noodles];
  const jsonLd = pastajsonld(noodles, description);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

          <Suspense fallback={<div>Loading...</div>}>
            <PastaImageResult noodles={noodles} />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export const dynamicParams = false;
