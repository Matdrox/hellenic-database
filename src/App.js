import { useState, useEffect } from 'react';
import GreekMyth, { allCollection } from 'greek-mythology-data';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  // const [mythsList, setMythsList] = useState([]);
  // const [search, setSearch] = useState('');
  const [search, setSearch] = useState({
    s: '',
    results: [],
    selected: {},
  });

  const cors = require('cors');

  const HandleSearch = (e) => {
    let s = e.target.value;
    setSearch((prevSearch) => {
      return { ...prevSearch, s: s };
    });
    // e.preventDefault();
    // FindSearch(search);
    console.log(search.s);
  };

  const EnterSearch = (e) => {
    if (e.key === 'Enter') {
      FindSearch();
    }
  };

	const allGods = new GreekMyth(allCollection)

  const FindSearch = (data) => {
    search.s = search.s[0].toUpperCase() + search.s.slice(1).toLowerCase();
    // const allGods = new GreekMyth(allCollection);
    console.log(allGods.list.find((item) => item.name === search.s));
    // console.log(allGods.list[1].greekName.split(',')[0])
    // console.log(search.s)
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
        FindSearch={FindSearch}
        EnterSearch={EnterSearch}
      />
      {/* <div className='container grid grid-cols-6 grid-rows-4 gap-10'> */}
			<Results results={search.results}/>
    </div>
  );
}

export default App;
