import React, { useState } from "react";
import confetti from "canvas-confetti";

function App() {
  const [fallingCaps, popCaps] = useState<{ id: string; src: string; left: number; top: number; duration: number }[]>([]);
  const [showNote, setShowNote] = useState(false);
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

  const capybaraImages = [
    '/images/cap.jpeg',
    '/images/capyyy.jpg',
    '/images/cap.jpg',
  ];
  
  const poppingCapybaras = () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const newCap = {
          id: Math.random().toString(36).substr(2, 9),
          src: capybaraImages[Math.floor(Math.random() * capybaraImages.length)],
          left: Math.random() * window.innerWidth,
          top: Math.random() * window.innerHeight,
          duration: 1500,
        };
        popCaps((prev) => [...prev, newCap]);

        setTimeout(() => {
          popCaps((prev) => prev.filter((c) => c.id !== newCap.id));
        }, 1500);
      }, i * 150);
    }
  };

  return (
    <>
      {fallingCaps.map(({ id, src, left, top }) => (
        <img
          key={id}
          src={src}
          alt="popping capybara"
          className="popping-capybara"
          style={{ left: left + "px", top: top + "px" }}
        />
      ))}

    <div className="flex min-h-screen bg-[#fffcf7]">
      <div className="bg-[#97d0ff] w-2/5 flex justify-center items-center">
        <img src="/images/cmas.jpeg" className="w-[90%] h-auto border-4 border-[#fffcf7] rounded-xl shadow-lg" />
      </div>

      <div className="flex flex-col justify-start items-start w-3/5 p-10">
        <h1 className="text-[#97d0ff] text-5xl font-bold mb-4">
          Happy 22 Lorenz!
        </h1>
        <p className="text-lg text-gray-700 pt-6 mb-6">
          hi cutie! &lt;3 <br /> <br />
          i'm so excited we get to be together on your birthday!<br />
          i am so in love with you and i hope you enjoy all your gifts!<br />
          we have a lot planned for the weekend so get ready for the best birthday ever!
        </p>

        <div className="flex gap-4 mt-6">
          <button
              onClick={() => { poppingCapybaras(); confetti(); }}
              className="mt-6 px-4 py-2 bg-[#97d0ff] rounded text-white hover:bg-[#7bb7ff]">
                click for surprise :D
          </button>

          <button onClick={() => { setShowNote(!showNote); confetti(); }} className="mt-6 px-4 py-2 bg-[#97d0ff] rounded text-white hover:bg-[#7bb7ff]">
            {showNote ? "Hide" : "💌"}
          </button>
        </div>

        {showNote && (
          <div className="mt-4 bg-white p-4 rounded text-gray-800 border-l-4 border-[#f28a88]">
            You make every day better than the last. Thank you for being my best friend and favorite person. I can't wait to keep making more memories with you.
          </div>
        )}

        <div className="mt-auto w-full rounded overflow-x-auto bg-[#f28a88]">
          <div className="flex scroll">
            {images.concat(images).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-48 h-48 object-cover mx-2 border-t-8 border-b-8 border-l-4 border-[#f28a88]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
