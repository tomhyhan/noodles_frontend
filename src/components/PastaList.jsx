import { createFarPts, createRavPts } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function PastaList() {
  return (
    <div>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-amber-800 mb-3'>
          Pasta Noodles
        </h1>
        <p className='text-amber-600 text-lg font-medium'>
          Click each shape to learn more about the pasta type
        </p>
      </div>

      <div className='grid grid-cols-4 justify-center align-middle'>
        {pastaTypes.map((pasta, index) => (
          <Link
            href={`/${pasta.name}`}
            key={pasta.name}
            className='m-5 flex flex-col justify-center items-center basis-1/4'
          >
            {/* Pasta shape */}
            <div
              className={`bg-amber-300 shadow-md relative ${pasta.className}`}
              style={{
                animation: `bounce ${1 + index * 0.2}s infinite ease-in-out`,
                animationDelay: `${index * 0.2}s`,
                ...pasta.styles,
              }}
            >
              {pasta.component && pasta.component}
            </div>
            {/* Pasta name */}
            <div className='mt-2 text-sm text-amber-700'>{pasta.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const pastaTypes = [
  {
    name: 'Spaghetti',
    styles: { width: '60px', height: '2px' },
  },
  { name: 'Linguine', styles: { width: '60px', height: '4px' } },
  { name: 'Fettuccine', styles: { width: '60px', height: '8px' } },
  {
    name: 'Tagliatelle',
    styles: { width: '60px', height: '12px' },
  },
  {
    name: 'Penne',
    styles: {
      clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
      width: '60px',
      height: '13px',
    },
  },
  {
    name: 'Macaroni',
    className: 'bg-transparent shadow-none',
    component: (
      <div className='w-12 h-6 rounded-b-3xl border-[15px] border-t-0 border-amber-300'></div>
    ),
  },
  {
    name: 'Rigatoni',
    styles: {
      borderRadius: '25px',
      width: '50px',
      height: '25px',
    },
    component: (
      <div
        className='border-amber-500 border-solid border-l-4'
        style={{
          position: 'absolute',
          width: '50px',
          height: '25px',
          borderRadius: '50%',
          left: '25px',
        }}
      />
    ),
  },
  {
    name: 'Farfalle',
    styles: {
      width: '40px',
      height: '40px',
      clipPath: `polygon(${createFarPts(40)})`,
    },
  },
  {
    name: 'Fusilli',
    styles: { width: '32px', height: '20px' },
    className: 'bg-transparent shadow-none',
    component: [...Array(6)].map((_, i) => (
      <div
        key={i}
        className='absolute w-6 h-3 bg-amber-300'
        style={{
          left: i * 7 - 7,
          transform: `rotate(${i % 2 ? '-80deg' : '-80deg'})`,
          borderRadius: '40%',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)',
        }}
      />
    )),
  },
  {
    name: 'Orzo',
    styles: { width: '28px', height: '10px', borderRadius: '50%' },
  },
  {
    name: 'Conchiglie',
    className: 'bg-transparent shadow-none',
    styles: { width: '20px', height: '30px' },
    component: (
      <Image
        src='/pastaimg/Conchiglie.png'
        alt='Conchiglie pasta'
        fill
        sizes='20px, 30px'
        style={{ transform: 'rotate(60deg)' }}
      />
    ),
  },
  {
    name: 'Bucatini',
    styles: {
      borderRadius: '25px',
      width: '50px',
      height: '8px',
    },
    component: (
      <div
        className='border-amber-500 border-solid border-l-4'
        style={{
          position: 'absolute',
          width: '20px',
          height: '8px',
          borderRadius: '50%',
          left: '40px',
        }}
      />
    ),
  },
  {
    name: 'Orecchiette',
    className: 'bg-transparent shadow-none',
    styles: { width: '30px', height: '30px' },
    component: (
      <Image
        src='/pastaimg/Orecchiette.png'
        alt='Orecchiette pasta'
        fill
        sizes='30px, 30px'
      />
    ),
  },
  {
    name: 'Ravioli',
    styles: {
      width: '40px',
      height: '40px',
      clipPath: `
        polygon(
            ${createRavPts(40)}
            )
            `,
    },
  },
  {
    name: 'Tortellini',
    className: 'bg-transparent shadow-none',
    styles: { width: '30px', height: '30px' },
    component: (
      <Image
        src='/pastaimg/Tortellini.png'
        alt='Tortellini pasta'
        fill
        sizes='30px, 30px'
      />
    ),
  },
  {
    name: 'Fregola',
    styles: { width: '15px', height: '15px', borderRadius: '50%' },
  },
];
