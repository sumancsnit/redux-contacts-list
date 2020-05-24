import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

import { addContact } from '../../actions/contactAction';

const AddContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContact(new_contact));
    history.push('/');
  };

  return (
    <div className='card border-0 shadow'>
      <div className='card-header bg-danger text-white'>Add New Contact</div>
      <div className='card-body'>
        <form onSubmit={(e) => createContact(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Phone No.'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
