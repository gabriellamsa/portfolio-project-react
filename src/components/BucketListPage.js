import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Form, Input, Button, ListGroup, ListGroupItem, TabContent, TabPane, NavLink as TabNavLink } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, toggleItemCompletion } from '../features/bucketListSlice';
import { selectCurrentUser } from '../user/userSlice';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import unicornAvatar from '../img/unicorn.png';
import { BsX } from 'react-icons/bs'; 

const BucketListPage = () => {
  const list = useSelector(state => state.bucketList.list);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('all');

  const handleAddItem = (itemName) => {
    const newItem = {
      id: list.length ? list[list.length - 1].id + 1 : 0,
      name: itemName,
      completed: false,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleToggleCompletion = (itemId) => {
    dispatch(toggleItemCompletion(itemId));
  };

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Navbar color="light" light expand="md" className="shadow-sm text-dark">
        <Container>
          <NavbarBrand href="/">
            <img 
              src={BucketListLogo}
              alt='Bucket List Logo'
              style={{ width: '50px', marginRight: '10px', borderRadius: '50%' }} 
            />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className="text-muted">Home Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list" className="text-muted">Create List</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {currentUser && (
              <NavItem className="ml-3 d-flex align-items-center">
                <p className="mr-3 mb-0 text-secondary">Welcome, {currentUser.username}!</p>
                <img 
                  src={currentUser.avatar || unicornAvatar}
                  alt='User Avatar'
                  style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #f0f0f0' }}
                />
              </NavItem>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4 bg-light rounded p-4">
        <h1 className="text-center mb-4 text-info">Bucket List - Project!</h1>
        <Form onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const input = form.elements.newTask;
          if (input.value.trim()) {
            handleAddItem(input.value.trim());
            input.value = '';
          }
        }} className="d-flex mb-4">
          <Input type="text" name="newTask" placeholder="New task..." />
          <Button type="submit" color="info" className="ms-2">Add</Button>
        </Form>
        <Nav tabs className="mb-4">
          <NavItem>
            <TabNavLink className={activeTab === 'all' ? 'active' : ''} onClick={() => toggleTab('all')}>
              All
            </TabNavLink>
          </NavItem>
          <NavItem>
            <TabNavLink className={activeTab === 'active' ? 'active' : ''} onClick={() => toggleTab('active')}>
              Active
            </TabNavLink>
          </NavItem>
          <NavItem>
            <TabNavLink className={activeTab === 'completed' ? 'active' : ''} onClick={() => toggleTab('completed')}>
              Completed
            </TabNavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="all">
            <ListGroup className="fixed-size-list">
              {list.map(item => (
                <ListGroupItem key={item.id} className="d-flex align-items-center border-0 mb-2 rounded" style={{ backgroundColor: "#f4f6f7" }}>
                  <input type="checkbox" className="me-3" checked={item.completed} onChange={() => handleToggleCompletion(item.id)} />
                  {item.completed ? <s>{item.name}</s> : item.name}
                  <Button color="danger" size="sm" className="ms-auto" style={{ minWidth: '32px', minHeight: '32px' }} onClick={() => handleRemoveItem(item.id)}><BsX size={20} /></Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          </TabPane>
          <TabPane tabId="active">
            <ListGroup className="fixed-size-list">
              {list.filter(item => !item.completed).map(item => (
                <ListGroupItem key={item.id} className="d-flex align-items-center border-0 mb-2 rounded" style={{ backgroundColor: "#f4f6f7" }}>
                  <input type="checkbox" className="me-3" checked={item.completed} onChange={() => handleToggleCompletion(item.id)} />
                  {item.name}
                  <Button color="danger" size="sm" className="ms-auto" style={{ minWidth: '32px', minHeight: '32px' }} onClick={() => handleRemoveItem(item.id)}><BsX size={20} /></Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          </TabPane>
          <TabPane tabId="completed">
            <ListGroup className="fixed-size-list">
              {list.filter(item => item.completed).map(item => (
                <ListGroupItem key={item.id} className="d-flex align-items-center border-0 mb-2 rounded" style={{ backgroundColor: "#f4f6f7" }}>
                  <input type="checkbox" className="me-3" checked={item.completed} onChange={() => handleToggleCompletion(item.id)} />
                  <s>{item.name}</s>
                  <Button color="danger" size="sm" className="ms-auto" style={{ minWidth: '32px', minHeight: '32px' }} onClick={() => handleRemoveItem(item.id)}><BsX size={20} /></Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          </TabPane>
        </TabContent>
      </Container>
    </>
  );
};

export default BucketListPage;
