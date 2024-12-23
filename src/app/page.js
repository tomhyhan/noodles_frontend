'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PastaLoader from '@/components/loader';
import { createFarPts, createRavPts } from '@/lib/utils';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Create a preview URL for the image
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    setLoading(true);
    try {
      // Create FormData to send the image
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Send to your API route
      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Prediction failed');

      const data = await response.json();
      router.push(`/${data[0]}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to process image');
    } finally {
      setLoading(false);
    }
  };

  const pastaTypes = [
    { name: 'Spaghetti', styles: { width: '60px', height: '2px' } },
    { name: 'Linguine', styles: { width: '60px', height: '4px' } },
    { name: 'Fettuccine', styles: { width: '60px', height: '8px' } },
    { name: 'Tagliatelle', styles: { width: '60px', height: '12px' } },
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
      styles: {},
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
      styles: { width: '28px', height: '10px', borderRadius: '50%' },
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
      styles: { width: '28px', height: '10px', borderRadius: '50%' },
    },
    // (50,4)
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
        styles: { width: '28px', height: '10px', borderRadius: '50%' },
    },
    {
        name: 'Fregola',
        styles: { width: '15px', height: '15px', borderRadius: '50%' },
    },
];

  return (
    <div className='w-screen h-screen bg-amber-50 relative overflow-hidden flex  justify-center '>
      <div className='text-center'>
        <h1 className='text-4xl mt-8 font-bold mb-4 text-amber-800'>
          Pasta Classification
        </h1>

        {/* <div className='p-4 max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-4 text-left'>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-4'>
              <input
                onChange={handleImage}
                type='file'
                accept='image/*'
                className='w-full'
              />
            </div>

            {preview && (
              <div className='relative h-64 w-full'>
                <Image
                  src={preview}
                  alt='Preview'
                  fill
                  className='object-contain'
                />
              </div>
            )}
            <button
              type='submit'
              disabled={!selectedImage || loading}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300 '
            >
              {loading ? <PastaLoader /> : 'Analyze Image'}
            </button>
          </form>
        </div> */}

        {/* Animated pasta shapes */}
        <h1 className='text-4xl font-bold mb-4 text-amber-800'>Noodle list</h1>

        <div className='flex justify-center align-middle flex-wrap'>
          {pastaTypes.map((pasta, index) => (
            <div key={pasta.name} className='m-5'>
              {/* Pasta shape */}
              <div
                className={`bg-amber-300 shadow-md animate-bounce relative`}
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
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-4 left-4 w-8 h-8 bg-amber-200 rounded-full opacity-50 animate-pulse' />
        <div className='absolute bottom-4 right-4 w-12 h-12 bg-amber-200 rounded-full opacity-50 animate-pulse' />
      </div>
    </div>
  );
}
