'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PastaLoader } from '@/components/PastaLoader';
import { PastaList } from '@/components/PastaList';
import { Dragging, PastaForm } from '@/components/PastaForm';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { trackFileUpload } from '@/components/GoogleAnalytics';

export default function Home() {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const dragCounter = useRef(0);
  const router = useRouter();
  const { toast } = useToast();

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      await submitImage(file, previewUrl);
      e.target.value = '';
      return () => URL.revokeObjectURL(previewUrl);
    }
  };

  const submitImage = async (file, previewUrl) => {
    if (!file) {
      toast({
        variant: 'destructive',
        title: 'File not found',
        description: 'Please upload a File',
      });
      return;
    }

    const validImageTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];
    if (!validImageTypes.includes(file.type)) {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description:
          'Please upload a valid image file (JPEG, PNG, GIF, or WebP)',
      });
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Prediction failed');

      const data = await response.json();
      trackFileUpload(file, true);
      router.push(`/${data[0]}?image=${encodeURIComponent(previewUrl)}`);
    } catch (error) {
      trackFileUpload(file, false);
      toast({
        variant: 'destructive',
        title: 'Image Processing Error',
        description: 'Failed to process image',
      });
    } finally {
      setLoading(false);
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
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      await submitImage(file, previewUrl);
      e.dataTransfer.clearData();
      return () => URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div
      className='text-center flex flex-col gap-10 m-16'
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className='text-amber-800 mb-3 max-w-2xl mx-auto flex flex-col gap-3'>
        <div className='mb-6'>
          <h1 className='text-5xl font-bold mb-2'>Find Your Pasta Shape</h1>
          <p className='text-amber-600 text-lg font-medium'>
            Upload any pasta photo for instant identification
          </p>
        </div>
        <PastaForm onFileInput={handleFileInput} />
        <PastaList />
      </div>

      {isDragging && <Dragging />}
      {loading ? <PastaLoader preview={preview} /> : <></>}
      <Toaster />
    </div>
  );
}
