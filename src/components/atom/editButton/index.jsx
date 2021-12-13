import React from 'react';
import PropTypes from 'prop-types';
import './editButton.css';

const EditButton = ({ value, onClick }) => {
  return (
    <button className='deleteButton' type="submit" onClick={onClick}>
      {value}
    </button>
  );
};

EditButton.propTypes = {
  value: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default EditButton;
