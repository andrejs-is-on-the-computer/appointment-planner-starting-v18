import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (new_contact) => {
    setContacts((prev_contacts)=>{
      const contact = {
        name : new_contact.name,
        phonenumber : new_contact.phonenumber,
        email: new_contact.email
      };
      return [...prev_contacts, contact];
    })
  };

  const addAppointment = (new_app) => {
    setContacts((prev_appointments)=>{
      const appointment = {
        title : new_app.title,
        contact: new_app.contact,
        date: new_app.date,
        time: new_app.time
      };
      return [...prev_appointments, appointment];
    });
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage 
                                                contacts={contacts} 
                                                addContact={addContact} 
                                              /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage 
                                                    appointments={appointments} 
                                                    contacts={contacts}
                                                    addAppointment={addAppointment} 
                                                  /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
