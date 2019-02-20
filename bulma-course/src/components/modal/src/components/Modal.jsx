import React, { useState } from "react";

const Modal = () => {
    const [modalStatus,setStatus] = useState('')
    const openModal = ()=>{
        setStatus('is-active');
    }
   const  closeModal = ()=>{
        setStatus('');
    }

  return (
    <React.Fragment>
      <button
        onClick={openModal}
        className="is-medium is-primary button is-outlined"
      >
        Open Modal
      </button>

      <div className={`modal ${modalStatus}`}>
        <div onClick={closeModal} className="modal-background" />
        <div className="modal-content">
          <p
            style={{ padding: "10px" }}
            className="has-background-light content"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            velit rem consectetur quidem unde voluptatum iure molestiae in vero
            tenetur autem molestias magnam mollitia a asperiores vitae,
            reprehenderit libero at? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Vitae dignissimos est expedita accusantium,
            mollitia ipsa, laborum quam facere veniam inventore non veritatis
            suscipit, perspiciatis architecto! Tempora delectus molestias
            similique deserunt.
          </p>
        </div>
        <button
          onClick={closeModal}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    </React.Fragment>
  );
};

export default Modal;
