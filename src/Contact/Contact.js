import React, { useState } from "react";
import './Contact.css';
import Button from '../Button/Button';
import Input from "../Input/Input";
import Modal from "../Modal/Modal";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
    };

    return (
        <div className="contact-me">
            <h1>Contact me</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <Input type={"text"} placeholder={"Enter your name"} label={"Name"} />
                    <Input type={"email"} placeholder={"Enter your email"} label={"Email"} />
                    <textarea className="message" placeholder="Enter your message" rows={5}></textarea>
                    <Button handleClick={handleSubmit}>Send Your Request</Button>
                </form>
            </div>
            {isModalOpen && (
                <Modal header="Welcome!" content="Thank you for your message!" onClose={closeModal} />
            )}
        </div>
    );
};

export default Contact;