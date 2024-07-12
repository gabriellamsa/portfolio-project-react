import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import BucketCard from './BucketCard';
import AddItemForm from './AddItemForm';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/bucketListSlice';
import unicornAvatar from '../img/unicorn.png';
import { selectCurrentUser } from '../user/userSlice';

const BucketListPage = () => {
  const list = useSelector(state => state.bucketList.list);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    const newItem = {
      id: list.length ? list[list.length - 1].id + 1 : 0,
      name: itemName,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <Navbar light expand="md" style={{ backgroundColor: 'white' }}>
        <Container>
          <NavbarBrand href="/">
            <img 
              src={BucketListLogo}
              alt='Bucket List Logo'
              style={{ width: '50px', marginRight: '10px' }} 
            />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list">Create List</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {currentUser && (
              <NavItem className="d-flex align-items-center ml-3">
                <p className="mr-3">Welcome, {currentUser.username}!</p>
                <img 
                  src={currentUser.avatar || unicornAvatar}
                  alt='User Avatar'
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </NavItem>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1 className="text-center mb-4">Bucket List - Project!</h1>
        <AddItemForm addItem={handleAddItem} />
        <Row>
          {list.map(item => (
            <Col md={4} key={item.id}>
              <BucketCard list={item} removeItem={handleRemoveItem} />
            </Col>
          ))}
        </Row>  
      </Container>
    </>
  );
};

export default BucketListPage;
