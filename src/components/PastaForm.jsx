export function Dragging() {
  return (
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
  );
}

export function PastaForm({ onFileInput }) {
  return (
    <div className='space-y-4 text-left mb-10 flex justify-center'>
      <div className='border-2 border-dashed border-amber-800 rounded-lg p-8  hover:bg-amber-50 relative h-[15rem] w-[30rem]'>
        <input
          onChange={onFileInput}
          type='file'
          accept='image/*'
          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
        />
        <div className='text-center flex flex-col justify-center items-center h-full'>
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
