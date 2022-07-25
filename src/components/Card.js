import { useState } from 'react';
import imgNotFound from '../images/notFound.jpg';
import ReactCardFlip from 'react-card-flip';

const Card = ({ value }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div
        className='bg-white/30 text-white text-center rounded-xl shadow-md h-full grid grid-cols-2 border-b border-r'
        onClick={handleClick}
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
        className='bg-white/30 text-slate-700 text-center rounded-xl shadow-md h-[458px] grid grid-cols-2 border-b border-r'
        onClick={handleClick}
      >
        <p className='w-[340px] h-96 m-auto break-words p-2'>{value.description}</p>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
