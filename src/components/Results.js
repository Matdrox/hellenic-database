import Card from './Card';

const Results = ({ results }) => {
  console.log(results)
  return (
    <div className='p-10 w-full grid grid-cols-1 gap-5 lg:grid-cols-5'>
      {/* GLASS CARD WITH GOD'S STATUE */}
      {/* {results.map((result) => (
        <Card result={result} />
      ))}

      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Results;
