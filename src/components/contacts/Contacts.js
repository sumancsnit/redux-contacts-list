import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';

export default function Contacts() {
  const contacts = useSelector((state) => state.contact.contacts);
  return (
    <div>
      <table className='table shadow'>
        <thead className='bg-danger text-white'>
          <tr>
            <th scope='col'>
              <div className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' />
                <label className='custom-control-label'></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
