import React from 'react';

const Modal = ({children, isVisible, onClose}) => (
  isVisible && (
    <div className="modal" onClick={onClose} >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        { children }
        <button autoFocus onClick={onClose}>Ok</button>
      </div>
    </div>
  )
);

export default Modal;
