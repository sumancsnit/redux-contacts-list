import { CREATE_CONTACT, GET_CONTACT } from '../constant';

export const addContact = (payload) => ({
  type: CREATE_CONTACT,
  payload,
});

// get a contact
export const getContact = (payload) => ({
  type: GET_CONTACT,
  payload,
});
