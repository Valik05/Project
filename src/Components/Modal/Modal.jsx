import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, open }) => {
  if (!open) return null
  return <div className="modal">{children}</div>
}

Modal.propTypes = {
  children: PropTypes.func,
  open: PropTypes.bool,
}

Modal.defaultProps = {
  children: () => {},
  open: true,
}

export default Modal
