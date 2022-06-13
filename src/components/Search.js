import { data } from 'autoprefixer';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = (props) => {
	console.log(props.data);
	return (
		<div>
			<div
				className='flex items-center shadow-md rounded'
				// onSubmit={console.log('few')}
				// onSubmit={props.FindSearch}
				// onSubmit={props.HandleSearch}
			>
				<input
					className='pl-2 rounded rounded-r-none p-2 z-10
        focus:outline-none'
					type='search'
					placeholder={props.placeholder}
					// value={props.search}
					// onChange={(e) => props.setSearch(e.target.value)}
					onChange={props.HandleSearch}
					onKeyPress={props.EnterSearch}
					required
				></input>
				<button
					type='submit'
					className='bg-blue-400 w-10 h-10 rounded rounded-l-none flex items-center justify-center'
					onClick={props.FindSearch}
				>
					<FaSearch className='text-white text-lg' />
				</button>
			</div>
			<div className='overflow-hidden overflow-y-auto bg-slate-100 h-[100px] w-[194px] -mt-[2px]'>
				{props.data.map((value, key) => {
					return (
						<div className='p-2 text-sm cursor-pointer hover:bg-slate-300'>
							{value.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Search;
