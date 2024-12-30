'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PastaLoader } from '@/components/PastaLoader';
import { PastaList } from '@/components/PastaList';
import { PastaForm } from '@/components/PastaForm';

export default function Home() {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const dragCounter = useRef(0);
  const router = useRouter();

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      await submitImage(file);
      e.target.value = '';
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const submitImage = async (file) => {
    if (!file) {
      alert('Please upload a File');
      return;
    }

    const validImageTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];
    if (!validImageTypes.includes(file.type)) {
      alert('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      // formData.append('image', file);

      // const response = await fetch('/api/predict', {
      //   method: 'POST',
      //   body: formData,
      // });

      // if (!response.ok) throw new Error('Prediction failed');

      // const data = await response.json();
      // router.push(`/${data[0]}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to process image');
    } finally {
      setTimeout(() => setLoading(false), 10000);
      // setLoading(false);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();

    dragCounter.current += 1;
    if (dragCounter.current == 1) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current == 0) setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // React.DragEvent<HTMLDivElement>
  const handleDrop = async (e) => {
    e.preventDefault();

    setIsDragging(false);
    dragCounter.current = 0;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setPreview(URL.createObjectURL(file));
      await submitImage(file);
      e.dataTransfer.clearData();
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  return (
    <div
      className='text-center max-w-screen-md'
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1 className='text-4xl mt-8 font-bold mb-4 text-amber-800'>
        Pasta Classification
      </h1>

      {isDragging && (
        <div className='absolute inset-0 bg-amber-800 bg-opacity-50 z-50 m-0 p-8'>
          <div className='text-center flex flex-col items-center justify-center border-[1rem] border-white border-dashed rounded-lg w-full h-full'>
            <div className='text-5xl mb-4' role='img' aria-label='pasta emoji'>
              🍝
            </div>
            <p className='text-4xl text-white font-semibold'>
              Drag and Drop your pasta image here
            </p>
          </div>
        </div>
      )}

      <PastaForm onFileInput={handleFileInput} />
      <div className='p-4 max-w-2xl mx-auto'>
        {/* {preview && (
            <div className='relative h-64 w-full'>
              <Image
                src={preview}
                alt='Preview'
                fill
                className='object-contain'
              />
            </div>
          )} */}
        {loading ? <PastaLoader preview={preview} /> : <></>}
        <PastaList />
      </div>
    </div>
  );
}
