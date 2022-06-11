import Card from './components/Card';

function App() {
  return (
    // PURPLE IF DARK MODE!
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-50 to-blue-400'>
      The Greek Mythology Search Database
      <div className='container grid grid-cols-6 gap-10'>
        {/* GLASS CARD WITH GOD'S STATUE */}
        <Card />
      </div>
    </div>
  );
}

export default App;
