import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../user/userSlice';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import unicornAvatar from '../img/unicorn.png';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import { useNavigate } from 'react-router-dom';

const UserLoginForm = ({ loginModalOpen, setLoginModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const user = {
      id: Date.now(),
      avatar: unicornAvatar,
      username: values.username,
      password: values.password
    };
    dispatch(setCurrentUser(user));
    setLoginModalOpen(false);
    navigate('/list');
  };

  return (
    <>
      <Modal isOpen={loginModalOpen} toggle={() => setLoginModalOpen(false)}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>
          Login
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={handleLogin}
            validate={validateUserLoginForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Field
                  id='username'
                  name='username'
                  placeholder='Username'
                  className='form-control'
                />
                <ErrorMessage 
                  name='username'
                  component='div'
                  className='text-danger'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Field
                  id='password'
                  name='password'
                  placeholder='Password'
                  className='form-control'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-danger'
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
