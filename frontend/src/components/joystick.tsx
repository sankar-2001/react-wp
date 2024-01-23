import React from 'react'

interface ArrowButtonsProps {
    onButtonClick: (direction: string) => void;
  }

export default function Joystick(onButtonClick: (direction:string)=> void) {
    const handleButtonClick = (direction: string) => {
        onButtonClick(direction);
      };
  return (    <div className="flex justify-center items-center">
  <button
    className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    onClick={() => handleButtonClick('left')}
  >
    ←
  </button>

  <div className="flex flex-col items-center mx-2">
    <button
      className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      onClick={() => handleButtonClick('up')}
    >
      ↑
    </button>

    <button
      className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-2"
      onClick={() => handleButtonClick('down')}
    >
      ↓
    </button>
  </div>

  <button
    className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    onClick={() => handleButtonClick('right')}
  >
    →
  </button>
</div>
  )
}
