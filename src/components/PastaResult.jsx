'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export function PastaImage() {
  const searchparams = useSearchParams();
  const imageData = searchparams.get('image');
  console.log(imageData);
  return (
    <div className='flex justify-center items-center h-64 w-full'>
      <Image
        src={imageData}
        alt='Preview'
        width={500}
        height={300}
        className='max-h-64 w-auto  rounded-md'
      />
    </div>
  );
}
