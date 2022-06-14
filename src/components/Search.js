import { FaSearch } from 'react-icons/fa';
import Results from './Results';

const Search = (props) => {
  return (
    <div>
      <div
        className='flex items-center justify-center mt-2 -mb-2'
        // onSubmit={console.log('few')}
        // onSubmit={props.FindSearch}
        // onSubmit={props.HandleSearch}
      >
        <input
          className='pl-2 shadow-md rounded rounded-r-none p-2 z-10
        focus:outline-none'
          type='search'
          placeholder={props.placeholder}
          // value={props.search}
          // onChange={(e) => props.setSearch(e.target.value)}
          // onChange={props.HandleSearch}
          onChange={props.HandleFilter}
          // onKeyPress={props.EnterSearch}
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
