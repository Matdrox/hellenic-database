import { useState, useEffect } from 'react';
import GreekMyth, { allCollection } from 'greek-mythology-data';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [mythsList, setMythsList] = useState([]);
  const [search, setSearch] = useState('');
  const cors = require('cors');

  const HandleSearch = (e) => {
    e.preventDefault();
    FindSearch(search);
  };

  const FindSearch = (search) => {
		search = search[0].toUpperCase() + search.slice(1).toLowerCase();
    const allGods = new GreekMyth(allCollection);
		console.log(allGods.list[1].greekName.split(',')[0])
		console.log(allGods.list.find(item => item.name === search))
  };

  return (
    // PURPLE IF DARK MODE!
    <div className='w-full min-h-screen flex flex-col items-center bg-gradient-to-bl from-blue-100 to-blue-400'>
      <h1 className='text-white font-bold text-5xl text-center mt-20'>
        Hellenic Database
      </h1>
      <p className='text-white text-3xl text-center'>
        The Greek Mythology Search Database
      </p>
      <br />
      <p className='text-white text-2xl text-center'>
        Search for a Hellenic god or creature:
      </p>
      <Search
        HandleSearch={HandleSearch}
        search={search}
        setSearch={setSearch}
        mythsList={mythsList}
      />
      {/* <div className='container grid grid-cols-6 grid-rows-4 gap-10'> */}
      <div className='p-10 w-full grid grid-cols-1 gap-5 lg:grid-cols-5'>
        {/* GLASS CARD WITH GOD'S STATUE */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
