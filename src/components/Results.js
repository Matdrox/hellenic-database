import Card from './Card';

const Results = ({ filteredData }) => {
  return (
    <div className='p-10 w-full grid grid-cols-1 gap-5 lg:grid-cols-5'>
      {filteredData.slice(0, 15).map((value, key) => {
        if (
          value.images.hasOwnProperty('regular') &&
          value.images.regular.length !== 0
        ) {
          return (
            <div className='cursor-pointer rounded-xl hover:bg-slate-300'>
              <Card value={value} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Results;
