import React, { useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { env } from 'process';

const accentColor = '#c5acf1';

const Section = styled.section`
  display: flex;
  flex-direction: column; // Arrange items in a column layout
  align-items: center; // Center align items horizontally
  padding: 40px;
  color: #ffffff; // White text color
`;

const Title = styled.h2`
  color: ${accentColor};
  font-size: 2.5em;
  text-align: center;
`;

const ContactForm = styled.form`
  margin-top: 20px;
  background-color: ${accentColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: #1A1A1A;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1A1A1A; // Use accentColor as background color
  color: #ffffff; // Use white text color
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); // Add inner shadow
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1A1A1A; ; // Use accentColor as background color
  color: #ffffff; // Use white text color
  resize: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); // Add inner shadow
`;

const SubmitButton = styled.button`
  display: block; // Make the button a block element
  max-width: 150px; // Set a max-width for the button
  margin: 0 auto; // Center the button
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1A1A1A; ; // Use accentColor as background color
  color: #ffffff; // Use white text color
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        console.log(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID)
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      if (!process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID) {
        throw new Error('Environment variables not set!');
      }
    
      const serviceID = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_USER_ID;
    
      emailjs.sendForm(serviceID, templateID, event.currentTarget, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
      setFormData({ name: '', email: '', message: '' });
    };
    
      
    return (
        <Section>
            <Title>Contact Me</Title>
            <ContactForm onSubmit={handleSubmit}>
                <Label htmlFor="name">Name:</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="email">Email:</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="message">Message:</Label>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </ContactForm>
        </Section>
    );
};

export default Contact;