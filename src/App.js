import React,{useState} from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContact = (cname,cphonenum,cemail) =>{
      setContacts((prevContacts)=>{
          const contact = {
              name : cname,
              phonenumber : cphonenum,
              email : cemail

          };
          return [...prevContacts,contact];
      });
      
  };
  const addAppointment = (atitle,contactobj,adate,atime) =>{
    setAppointments((prevAppointments)=>{
        const appointment = {
            title : atitle,
            contact : contactobj,
            date : adate,
            time  : atime

        };
        return [...prevAppointments,appointment];
    });
    
};
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
  
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate to={ROUTES.CONTACTS} />}>
            {/* <Navigate to={ROUTES.CONTACTS} /> */}
          </Route>
          <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts = {contacts} addContact = {addContact} />}>
             {/* Add props to ContactsPage */}
            {/* <ContactsPage contacts = {contacts} addContact = {addContact} /> */}
          </Route>
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments = {appointments} contacts = {contacts} addAppointment = {addAppointment} />}>
            {/* Add props to AppointmentsPage */}
            {/* <AppointmentsPage appointments = {appointments} contacts = {contacts} addAppointment = {addAppointment} /> */}
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
