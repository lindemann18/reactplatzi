import React from 'react';
import './modal.css';

function Modal({children,handleClick})
{
  return(
      <div className="Modal">
        {children}
        <button onClick={handleClick} className="Modal-close" />
      </div>
  )
}

export default Modal;
