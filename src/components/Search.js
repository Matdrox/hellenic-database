import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = (props) => {
	return (
		<form
			className='flex items-center shadow-md rounded'
			onSubmit={props.HandleSearch}
		>
			<input
				className='pl-2 rounded rounded-r-none p-2
        focus:outline-none'
				type='search'
				placeholder='Zeus'
				value={props.search}
				onChange={(e) => props.setSearch(e.target.value)}
				required
			></input>
			<button
				type='submit'
				className='bg-blue-400 w-10 h-10 rounded rounded-l-none flex items-center justify-center'
			>
				<FaSearch className='text-white text-lg' />
			</button>
		</form>
	);
};

export default Search;
