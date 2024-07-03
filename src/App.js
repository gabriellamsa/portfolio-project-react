import BucketCard from "./components/BucketCard";

const randomList = [
  {
    id: 0,
    name: 'Travel to Asia'
  },
  {
    id: 1,
    name: 'Advanced PADI diving certificate'
  },
  {
    id: 2,
    name: 'Diving with whale sharks'
  },
]

function App() {
  return (
    <div>
      <h1>Bucket List - Project!</h1>
      {randomList.map( testList => <BucketCard list={testList} /> )}
    </div>
  );
}

export default App;
