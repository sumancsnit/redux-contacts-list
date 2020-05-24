import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <td>
        <div className='custom-control custom-checkbox'>
          <input type='checkbox' className='custom-control-input' />
          <label className='custom-control-label'></label>
        </div>
      </td>
      <td>
        {' '}
        <Avatar className='mr-2' name={name} size={40} round /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='actions'>
        <Link to={`/edit/${id}`}>
          <i className='material-icons md-36 mr-2'>edit</i>
        </Link>
        <Link to='/'>
          <i className='material-icons md-36 text-danger'>remove_circle</i>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;
