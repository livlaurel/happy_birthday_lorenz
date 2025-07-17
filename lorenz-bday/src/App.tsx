import { useEffect, useState } from 'react';

function App() {
  const images = [
    '/images/bday.jpeg',
    '/images/din.jpeg',
    '/images/handy.jpeg',
    '/images/nom.jpeg',
    '/images/cap.jpeg',
    '/images/makeup.jpeg',
    '/images/pt.jpeg',
    '/images/sha.jpeg',
    '/images/flow.jpeg',
    '/images/seum.jpeg',
    '/images/dinner.jpeg',
    '/images/sleep.jpeg',
    '/images/cmas.jpeg',
    '/images/kissy.jpeg',
    '/images/npm.jpeg',
   
  ]; 

  return (
    <div className="flex min-h-screen">
      <div className="bg-[#97d0ff] w-2/5"></div>

      <div className="flex flex-col justify-start items-start w-3/5 p-10">
        <h1 className="text-black text-5xl font-bold mb-4">
          Happy 22 Lorenz!
        </h1>
        <p className="text-lg text-gray-700 mb-6">hi cutie!</p>
        
        <div className="overflow-hidden w-full">
          <div className="flex scroll">
            {images.concat(images).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-48 h-48 object-cover mx-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
