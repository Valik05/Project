import React from 'react'
import './Modal.css'
const Modal = ({ children, open }) => {
  if (!open) return null
  return <div className="modal">{children}</div>
}

export default Modal
