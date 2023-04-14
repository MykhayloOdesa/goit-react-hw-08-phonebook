import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { deleteContact, editContact } from 'redux/operations';

export default function ContactListItem({ id, name, number }) {
  const [, setEditedName] = useState(name);
  const [, setEditedNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEditContact = (newName, newNumber) => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    setIsEdit(false);
    setEditedName(newName);
    setEditedNumber(newNumber);

    dispatch(
      editContact({
        id: id,
        name: newName ? newName : name,
        number: newNumber ? newNumber : number,
      })
    );
  };

  return (
    <>
      {isEdit ? (
        <>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={event => setEditedName(event.target.value)}
            />
          </label>

          <label>
            Number:
            <input
              name="number"
              type="text"
              value={number}
              onChange={event => setEditedNumber(event.target.value)}
            />
          </label>
        </>
      ) : (
        <p>
          {name}: {number}
        </p>
      )}

      <div>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
        <Button type="button" onClick={handleEditContact}>
          {isEdit ? 'Save' : 'Edit'}
        </Button>
      </div>
    </>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
