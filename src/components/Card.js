import imgAthena from '../images/AthenaGlass.png';

const Card = ({ value }) => {
  return (
    // <div className='bg-white/30 h-30 col-span-1 row-span-2 grid grid-cols-2 grid-rows-4 rounded-xl shadow-md'>
    <div className='bg-white/30 text-white text-center rounded-xl shadow-md h-full grid grid-cols-2 border-b border-r'>
      <div className='col-span-2 row-span-2'>
        <img
          className='mix-blend-darken rounded-t-xl h-96 w-full object-cover'
          src={value.images.regular}
        />
      </div>
      <h1 className='col-span-2 text-white text-3xl font-bold'>{value.name}</h1>
      <h2 className='col-span-2 text-white text-3xl'>
        {value.greekName && value.greekName.split(',')[0]}
      </h2>
      <p
        className='col-span-2 text-white text-xl'
        href={`en.wikipedia.org/wiki/${value.name}`}
        target='_blank'
      ></p>
    </div>
  );
};

export default Card;
