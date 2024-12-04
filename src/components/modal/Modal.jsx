import React from "react";
import "./Modal.css"; // Add your modal styles here
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoMdCloseCircleOutline size={30} />
        </button>
        <div className="modal-body">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
