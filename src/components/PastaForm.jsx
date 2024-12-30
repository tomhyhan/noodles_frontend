export function PastaForm({ onFileInput }) {
  return (
    <div className='space-y-4 text-left'>
      <div className='border-2 border-dashed border-amber-800 rounded-lg p-8 transition-colors hover:bg-amber-50 relative'>
        <input
          onChange={onFileInput}
          type='file'
          accept='image/*'
          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        />
        <div className='text-center'>
          <div className='text-4xl mb-2'>🍝</div>
          <p className='text-amber-800 font-medium'>
            Drag and drop your pasta image here
            <br />
            <span className='text-amber-600'>or click to choose a file</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const UploadIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-12 h-12 mx-auto mb-4 text-amber-800'
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='17 8 12 3 7 8' />
    <line x1='12' y1='3' x2='12' y2='15' />
  </svg>
);
