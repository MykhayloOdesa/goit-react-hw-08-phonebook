import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { deleteContact, editContact } from 'redux/operations';

export default function ContactListItem({ id, name, number }) {
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEditContact = () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    setIsEdit(false);
    setEditedName(editedName);
    setEditedNumber(editedNumber);

    dispatch(
      editContact({
        id,
        name: editedName,
        number: editedNumber,
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
              value={editedName}
              onChange={event => setEditedName(event.target.value)}
            />
          </label>

          <label>
            Number:
            <input
              name="number"
              type="text"
              value={editedNumber}
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
        {isEdit ? (
          <Button type="button" disabled>
            Delete
          </Button>
        ) : (
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        )}

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
