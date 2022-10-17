import React from 'react';
import PropTypes, { array } from 'prop-types';
import './Modal.css';

const Modal = ({ children, open }) => {
  if (!open) return null
  return <div className="modal">{children}</div>
}

Modal.propTypes = {
  children: PropTypes.array,
  open: PropTypes.bool,
}

Modal.defaultProps = {
  children: array,
  open: true,
}

export default Modal
