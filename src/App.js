import { useState } from "react";
import BucketCard from './components/BucketCard';
import AddItemForm from './components/AddItemForm';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "reactstrap";

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

  const handleLogin = (username, password) => {
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <>
      <Header />
      <Container className='mt-4'>
        <h1 className='text-center mb-4'>Bucket List - Project!</h1>
        <AddItemForm addItem={addItem} />
        <Row>
          {list.map(item => (
            <Col md={4} key={item.id}>
              <BucketCard list={item} removeItem={removeItem} />
            </Col>
          ))}
        </Row>  
      </Container>
      <Footer />
    </>
  );
};

export default App;
