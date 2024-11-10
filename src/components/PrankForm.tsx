import { useState } from 'react';
import Banner from './Banner';

const PrankForm = () => {
  const [name, setName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [height, setHeight] = useState('');
  const [crushHeight, setCrushHeight] = useState('');
  const [age, setAge] = useState('');
  const [crushAge, setCrushAge] = useState('');
  const [favColor, setFavColor] = useState('');
  const [likeAbout, setLikeAbout] = useState('');
  const [knowEachOther, setKnowEachOther] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, crushName, height, crushHeight, age, crushAge, favColor, likeAbout, knowEachOther, message }),
    });
    if (response.ok) {
      alert("Oops! Gotcha - It's a prank! Your details are sent to the Shikhar Gupta!");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-white/80 backdrop-blur p-8 rounded-lg shadow-xl space-y-4">
        <Banner />
      <h1 className="text-3xl font-bold text-center mb-4 text-pink-700">Love Calculator</h1>
      
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="form-input flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Crush's Name *"
          className="form-input flex-1"
          value={crushName}
          onChange={(e) => setCrushName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Your Height"
          className="form-input flex-1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Crush's Height"
          className="form-input flex-1"
          value={crushHeight}
          onChange={(e) => setCrushHeight(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <input
          type="number"
          placeholder="Your Age"
          className="form-input flex-1"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          placeholder="Crush's Age"
          className="form-input flex-1"
          value={crushAge}
          onChange={(e) => setCrushAge(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Favorite Color"
        className="form-input w-full"
        value={favColor}
        onChange={(e) => setFavColor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Things You Like About Them"
        className="form-input w-full"
        value={likeAbout}
        onChange={(e) => setLikeAbout(e.target.value)}
      />
      </div>
      <div className="flex flex-wrap gap-4">
      <textarea
        placeholder="How You Know Each Other"
        className="form-textarea w-full"
        value={knowEachOther}
        onChange={(e) => setKnowEachOther(e.target.value)}
      ></textarea>

      <textarea
        placeholder="Secret Message"
        className="form-textarea w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      </div>
        <div className="flex justify-center">
      <button type="submit" className="button-hover w-full p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
        Calculate Love ❤️
      </button>
      </div>
    </form>
  );
};

export default PrankForm;
