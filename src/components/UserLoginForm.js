import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../user/userSlice';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import unicornAvatar from '../img/unicorn.png';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import '../style/Login.css';

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
              <div className='input-field'>
                <Field
                  id='username'
                  name='username'
                  placeholder='Username'
                  className='form-control'
                />
                <FaUser className='icon' />
              </div>
              <ErrorMessage 
                name='username'
                component='div'
                className='text-danger'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <div className='input-field'>
                <Field
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='form-control'
                />
                <FaLock className='icon' />
              </div>
              <ErrorMessage
                name='password'
                component='div'
                className='text-danger'
              />
            </FormGroup>
            <div className='recall-forget'>
              <label>
                <Field type='checkbox' name='rememberMe' />
                Remember me
              </label>
              <a href='#'>Forgot your password?</a>
            </div>
            <Button type='submit' color='primary' className='w-100'>
              Login
            </Button>
            <div className='signup-link'>
              <p>
                Don't have an account? <a href='#'>Register</a>
              </p>
            </div>
          </Form>
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default UserLoginForm;
