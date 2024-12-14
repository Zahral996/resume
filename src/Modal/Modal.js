import React from "react";
import './Modal.css';

const Modal = ({ header, content, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{header}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Modal;