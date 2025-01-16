'use client';

import { pastaData } from '@/lib/pastaData';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export function PastaImageResult({ noodles }) {
  const searchparams = useSearchParams();
  const imageData = searchparams.get('image')
    ? searchparams.get('image')
    : `/defaultpasta/${noodles}.jpg`;
  return (
    <>
      {imageData && (
        <div className='flex justify-center items-center h-64 w-full'>
          <Image
            src={imageData}
            alt='Preview'
            width={500}
            height={300}
            className='max-h-64 w-auto rounded-md'
          />
        </div>
      )}
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
            {imageData ? 'Try Another Image' : 'Go Back to Home'}
          </button>
        </Link>
      </div>
    </>
  );
}
