import imgAthena from '../images/AthenaGlass.png';

const Card = ({ result }) => {
  return (
    // <div className='bg-white/30 h-30 col-span-1 row-span-2 grid grid-cols-2 grid-rows-4 rounded-xl shadow-md'>
    <div className='bg-white/30 text-white text-center rounded-xl shadow-md grid grid-cols-2'>
      <img className='col-span-2 w-full h mix-blend-screen' src={imgAthena} />
      <h1 className='col-span-2 text-white text-3xl font-bold'>{result}</h1>
      <h2 className='col-span-2 text-white text-3xl'>ΑΘΗΝΑ</h2>
    </div>
  );
};

export default Card;
