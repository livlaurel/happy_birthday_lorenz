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
        
        <div className="mt-auto w-full overflow-x-auto bg-[#f28a88]">
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
  );
}

export default App;
