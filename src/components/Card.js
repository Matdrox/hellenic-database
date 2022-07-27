import { useState } from 'react';
import imgNotFound from '../images/notFound.jpg';
import ReactCardFlip from 'react-card-flip';

const Card = ({ value }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const firstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div
        className='bg-white/30 text-white text-center rounded-xl shadow-md h-full grid grid-cols-2 border-b border-r'
        onMouseDown={handleClick}
        onMouseUp={handleClick}
      >
        <div className='col-span-2 row-span-2'>
          <img
            className='mix-blend-darken rounded-t-xl h-96 w-full object-cover object-top'
            src={value.images.regular ? value.images.regular : imgNotFound}
          />
        </div>
        <h1 className='col-span-2 text-white text-3xl font-bold'>
          {value.name.split('/')[0]}
        </h1>
        <h2 className='col-span-2 text-white text-3xl'>
          {value.greekName && value.greekName.split(',')[0]}
        </h2>
        <p
          className='col-span-2 text-white text-xl'
          href={`en.wikipedia.org/wiki/${value.name}`}
          target='_blank'
        ></p>
      </div>

      <div
        className='bg-white/30 text-slate-700 text-center rounded-xl shadow-md h-[456px] w-full flex items-center justify-center border-b border-r'
        onMouseUp={handleClick}
      >
        <p className='p-2 text-sm content-center'>{value.description && firstLetter(value.description)}</p>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
