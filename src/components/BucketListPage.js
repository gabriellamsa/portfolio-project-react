import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Form, Input, ListGroup, ListGroupItem, TabContent, TabPane, NavLink as TabNavLink } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, toggleItemCompletion } from '../features/bucketListSlice';
import { selectCurrentUser } from '../user/userSlice';
import BucketListLogo from '../img/bucket-list-logo.jpeg';
import unicornAvatar from '../img/unicorn.png';

const BucketListPage = () => {
  const list = useSelector(state => state.bucketList.list);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('all');
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newItem = {
        id: list.length ? list[list.length - 1].id + 1 : 0,
        name: inputValue,
        completed: false,
      };
      dispatch(addItem(newItem));
      setInputValue('');
    }
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
      </Navbar>
      <div style={{
        background: 'radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%), linear-gradient(121.28deg, #669600 0%, #ff0000 100%), linear-gradient(360deg, #0029ff 0%, #8fff00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%), radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%)',
        backgroundBlendMode: 'screen, color-dodge, overlay, difference, normal',
        minHeight: '100vh',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="bg-light rounded p-4" style={{ width: '90%', maxWidth: '800px' }}>
          <h1 className="text-center mb-4 text-info">Bucket List - Project!</h1>
          <Form onSubmit={handleAddItem} className="d-flex justify-content-center align-items-center">
            <Input
              type="textarea"
              placeholder="What do you need to do today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ 
                height: '200px', 
                width: '100%', 
                border: '2px solid #ced4da',
                borderRadius: '10px',
                padding: '10px',
                fontSize: '16px',
                boxShadow: '0px 2px 2px rgba(0,0,0,0.1)'
              }}
            />
            <Button type="submit" size="sm" style={{ width: '100px', height: '50px', marginLeft: '10px' }}>
              ADD
            </Button>
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
                  </ListGroupItem>
                ))}
              </ListGroup>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </>
  );
};

export default BucketListPage;
