import { useState, useEffect } from 'react';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [mythsList, setMythsList] = useState([]);
  const [search, setSearch] = useState('');

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchSearch(search);
  };

  const FetchSearch = async (query) => {
    const temp = await fetch(
      `https://anfi.tk/greekApi/person/en/${query}`
    ).then((res) => res.json());
    console.log(temp.results)
    setMythsList(temp.results);
  };

  return (
    // PURPLE IF DARK MODE!
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-100 to-blue-400'>
      <h1 className='text-white font-bold text-5xl'>Hellenic Database</h1>
      <p className='text-white text-3xl'>The Greek Mythology Search Database</p>
      <br />
      <p className='text-white text-2xl'>
        Search for a Hellenic god or creature:
      </p>
      <Search
        HandleSearch={HandleSearch}
        search={search}
        setSearch={setSearch}
        mythsList={mythsList}
      />
      <div className='container grid grid-cols-6 gap-10'>
        {/* GLASS CARD WITH GOD'S STATUE */}
        <Card />
      </div>
    </div>
  );
}

export default App;
