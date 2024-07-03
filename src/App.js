
import { useState } from "react";
import BucketCard from './components/BucketCard';
import AddItemForm from './components/AddItemForm';

const App = () => {
  const [list, setList] = useState([
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
  
  ]);

  const addItem = (itemName) => {
    const newItem = {
      id: list.length ? list[list.length -1].id +1 : 0,
      name: itemName
    };

    setList([...list, newItem]);
  };

  const removeItem = (itemId) => {
    setList(list.filter(item => item.id !== itemId));
  };


  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>Bucket List - Project!</h1>
      <AddItemForm addItem={addItem} />
      <div className='row'>
        {list.map(item => (
          <div className='col-md-4' key='{item.id'>
            <BucketCard list={item} removeItem={removeItem} />
          </div>
        ))}
      </div>  
    </div>
  );
};

export default App;
