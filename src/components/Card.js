import React from 'react';
import imgAthena from '../images/Athena.png';

const Card = () => {
  return (
    <div className='bg-white/30 h-30 col-span-1 row-span-2 grid grid-cols-2 grid-rows-4 rounded-xl shadow-md'>
      <h1 className='row-start-1 row-span-1 text-white text-3xl font-bold'>
        ATHENA
      </h1>
      <h2 className='row-start-2 row-span-1 text-white text-3xl'>ΑΘΗΝΑ</h2>
      <img className='row-start-1 col-start-2' src={imgAthena}/>
    </div>
  );
};

export default Card;
