import { useState } from 'react';
import GreekMyth, { allCollection } from 'greek-mythology-data';
import Search from './components/Search';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const allGods = new GreekMyth(allCollection);

  const HandleFilter = (e) => {
    const search = e.target.value;
    const newFilter = allGods.collection
      .filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase());
      })
      .slice(0, 200);
    setFilteredData(newFilter);
  };

  console.log(filteredData);

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-[url("images/background.jpg")] bg-cover'>
      <h1 className='text-white font-bold text-5xl text-center mt-20'>
        Hellenic Database
      </h1>
      <p className='text-white text-3xl text-center'>
        The Greek Mythology Search Database
      </p>
      <br />
      <p className='text-white text-2xl text-center'>
        Search for a Hellenic god or hero:
      </p>
      <Search
        placeholder='Enter a name...'
        data={allGods.collection}
        HandleFilter={HandleFilter}
        filteredData={
          filteredData.length != 0 ? filteredData : allGods.collection
        }
      />
    </div>
  );
}

export default App;
