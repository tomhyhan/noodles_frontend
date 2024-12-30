import React, { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';

const PreviewComponent = memo(({ preview }) => {
  return (
    <div className='flex justify-center items-center h-64 w-full'>
      <Image
        src={preview}
        alt='Preview'
        width={500}
        height={300}
        className='max-h-64 w-auto  rounded-md'
      />
    </div>
  );
});

export function PastaLoader({ preview }) {
  const [activeLetter, setActiveLetter] = useState(0);
  const letters = 'Noodles'.split('');
  const n_letters = letters.length;
  const ballTravelTime = 4;
  const intervalTime = (ballTravelTime / n_letters) * 1000;

  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#FFB84D',
    '#95E1D3',
    '#FF8B94',
    '#96CEB4',
    '#FFEEAD',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLetter((prev) => (prev + 1) % letters.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed left-0 top-0 flex h-screen w-screen items-center justify-center z-50 bg-black flex-col bg-opacity-50 gap-14'>
      {preview && <PreviewComponent preview={preview} />}
      <div className='relative'>
        <div className='flex'>
          {letters.map((letter, index) => (
            <div
              key={index}
              className='text-6xl font-bold text-center font-comic'
              style={{
                transform: activeLetter === index ? 'scale(1.2)' : 'scale(1)',
                display: 'inline-block',
                transformOrigin: 'center',
                width: '50px',
                color: colors[index],
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        <div
          className='absolute w-3 h-3 bg-red-500 rounded-full'
          style={{
            animation: `jumpBetweenLetters ${ballTravelTime}s infinite ease-in-out`,
            left: '0%',
            top: '-20px',
            filter: 'drop-shadow(0 3px 2px rgba(0,0,0,0.2))',
          }}
        />

        <style jsx>{`
          @keyframes jumpBetweenLetters {
            0% {
              transform: translateY(8px) translateX(25px);
            }
            7% {
              transform: translateY(-40px) translateX(50px);
            }
            14% {
              transform: translateY(20px) translateX(75px);
            }
            21% {
              transform: translateY(-40px) translateX(100px);
            }
            28% {
              transform: translateY(20px) translateX(125px);
            }
            35% {
              transform: translateY(-40px) translateX(150px);
            }
            42% {
              transform: translateY(8px) translateX(175px);
            }
            49% {
              transform: translateY(-40px) translateX(200px);
            }
            56% {
              transform: translateY(8px) translateX(225px);
            }
            63% {
              transform: translateY(-40px) translateX(250px);
            }
            70% {
              transform: translateY(20px) translateX(275px);
            }
            77% {
              transform: translateY(-40px) translateX(300px);
            }
            84% {
              transform: translateY(20px) translateX(325px);
            }
            91% {
              transform: translateY(-40px) translateX(350px);
            }
            100% {
              transform: translateY(8px) translateX(25);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
