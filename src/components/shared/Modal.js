import React from 'react';
import '../../styles/scss/modal.scss';

const Modal = ({ showModal, children  }) => {
  return (
    <div className={showModal ? 'modal display-block' : 'modal display-none'}>
      <section className='modal-main'>
        {children}        
      </section>
    </div>
  );
};

export default Modal;

