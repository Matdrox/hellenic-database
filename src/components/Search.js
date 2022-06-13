import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = (props) => {
	const [filteredData, setFilteredData] = useState([]);

	const HandleFilter = (e) => {
		const search = e.target.value;
		const newFilter = props.data.filter((value) => {
			// return value.name.includes(search);
			return value.name.toLowerCase().includes(search.toLowerCase());
		});
		setFilteredData(newFilter);
	};

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
					// onChange={props.HandleSearch}
					onChange={HandleFilter}
					// onKeyPress={props.EnterSearch}
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
			{filteredData.length != 0 && (
				<div className='overflow-hidden overflow-y-auto bg-slate-100 h-48 w-[194px] -mt-[2px]'>
					{filteredData.map((value, key) => {
						return (
							<div className='p-2 text-sm cursor-pointer hover:bg-slate-300'>
								{value.name}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Search;
