import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { deleteContact } from 'redux/operations';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
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
