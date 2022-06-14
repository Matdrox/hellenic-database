import { useState, useEffect } from 'react';
import GreekMyth, { allCollection } from 'greek-mythology-data';
import Search from './components/Search';

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const HandleFilter = (e) => {
    const search = e.target.value;
    const newFilter = allGods.collection.filter((value) => {
      // return value.name.includes(search);
      return value.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  const allGods = new GreekMyth(allCollection);
  console.log(filteredData);

  // const FindSearch = (data) => {
  //   search.s = search.s[0].toUpperCase() + search.s.slice(1).toLowerCase();
  //   search.results = allGods.list.find((item) => item.name === search.s)
  //   // console.log(allGods.list[1].greekName.split(',')[0])
  // };

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
        placeholder='Enter a name...'
        data={allGods.collection}
        HandleFilter={HandleFilter}
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
