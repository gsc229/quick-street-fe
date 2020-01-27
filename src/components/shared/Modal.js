import React from 'react';
import modal from '../../styles/scss/modal.module.scss';


const Modal = ({ showModal, children }) => {
  return (
    <div className={showModal ? `${modal.modal} ${modal.display_block}` : `${modal.modal} ${modal.display_none}`}>
      <section className={`${modal.modal_main}`}>
        {children}
      </section>
    </div>
  );
};

export default Modal;

