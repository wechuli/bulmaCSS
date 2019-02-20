import React, { useState } from "react";

const Modal2 = () => {
  const [modalStatus, setStatus] = useState("");
  const openModal = () => {
    setStatus("is-active");
  };
  const closeModal = () => {
    setStatus("");
  };

  return (
    <React.Fragment>
      <button
        onClick={openModal}
        className="is-medium is-primary button is-outlined"
      >
        Open Modal 2
      </button>

      <div className={`modal ${modalStatus}`}>
        <div onClick={closeModal} className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button
              onClick={closeModal}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, natus velit? Est, rem eaque rerum, aspernatur laboriosam
            natus esse expedita, modi excepturi id eum veniam asperiores ullam
            vero delectus? Quas.
          </section>
          <footer className="modal-card-foot">
            <button onClick={closeModal} className="button is-success">
              Save changes
            </button>
            <button onClick={closeModal} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal2;
