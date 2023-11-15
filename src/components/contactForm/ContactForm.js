import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = ({ target }) =>{
    const { value } = target;
    setName(value);
  };
  const handlePhoneChange = ({ target }) =>{
    const { value } = target;
    setPhone(value);
  };
  const handleEmailChange = ({ target }) =>{
    const { value } = target;
    setEmail(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name idiot" value={name} onChange={handleNameChange} />
        <input type="text" placeholder="Enter your phone idiot" value={phone} onChange={handlePhoneChange} />
        <input type="text" placeholder="Enter your email idiot" value={email} onChange={handleEmailChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

