import { FaSearch } from 'react-icons/fa';
import Results from './Results';

const Search = (props) => {
  return (
    <div>
      <div className='flex items-center justify-center mt-2 -mb-2'>
        <input
          className='pl-2 shadow-md rounded rounded-r-none p-2 z-10
        focus:outline-none'
          type='search'
          placeholder={props.placeholder}
          onChange={props.HandleFilter}
          required
        ></input>
        <button
          type='submit'
          className='bg-blue-400 w-10 h-10 shadow-md rounded rounded-l-none flex items-center justify-center pointer-events-none'
        >
          <FaSearch className='text-white text-lg' />
        </button>
      </div>
      <div>
        <Results filteredData={props.filteredData} />
      </div>
    </div>
  );
};

export default Search;
