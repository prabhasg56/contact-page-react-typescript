import React from "react";

import { useAppSelector } from "../redux/hooks";

const ContactList = () => {
  const contactInfo = useAppSelector((state) => state.contactInfo);
console.log(contactInfo.contacts)

  return (
    <div className="flex flex-col items-center mt-4">
      contact lists
      {contactInfo.contacts.map((c) => {
        return (
          <>
            <div>{c.firstName}</div>
          </>
        );
      })}
    </div>
  );
};

export default ContactList;
