import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Redux/contactsSlice';
import { DeleteButton } from './ContactList.styled';

const ContactListItem = ({ id, text, number, onDeleteContact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>:&nbsp;
      <span>{number}</span>&nbsp;
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </li>
  );
};

export default ContactListItem;
