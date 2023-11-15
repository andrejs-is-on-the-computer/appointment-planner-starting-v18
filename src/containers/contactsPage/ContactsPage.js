import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ duplicateName, setDuplicateName ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const new_contact = {
    name: name,
    phone: phone,
    email: email
   };
   if (!duplicateName) {
    addContact(new_contact);
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const result = contacts.find((element) => {
      return element.name === name;
    });
    if (result !== undefined){
      setDuplicateName(true);
    }
  },[name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          handleSubmit={handleSubmit}
          name={name} setName={setName}
          email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
