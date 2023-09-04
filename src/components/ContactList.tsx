import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { deleteContact } from "../redux/slices/contacts";
import { NavLink } from "react-router-dom";

const ContactList = () => {
  const contactInfo = useAppSelector((state) => state.contactInfo);
  const dispatch = useAppDispatch();

  const deleteContactHandler = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-wrap  xl:ml-60 md:ml-24 ml-12 p-2  mt-4">
      {contactInfo.contacts.length ? (
        contactInfo.contacts.map((contact, key) => {
          return (
            <div className="flex row" key={contact.id}>
              <div className="max-w-sm p-4 mt-3 ml-4 bg-white rounded-lg drop-shadow dark:bg-sky-200 dark:border-gray-700">
                <div className="flex flex-col">
                  <div>
                    <span className="font-bold">First Name:</span>
                    <span className="ml-2">{contact.firstName}</span>
                  </div>
                  <div>
                    <span className="font-bold">Last Name: </span>
                    <span className="ml-2">{contact.lastName}</span>
                  </div>
                  <div>
                    <span className="font-bold">Status: </span>
                    <span className="ml-2">{`${
                      contact.status ? "Active" : "Inactive"
                    }`}</span>
                  </div>
                </div>
                <div className="md:flex md:items-center mt-2">
                  <div className="flex flex-row md:w-2/3 ">
                    <NavLink
                      className="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded mr-2"
                      type="button"
                      to={`/update-contact/${contact.id}`}
                    >
                      Update
                    </NavLink>

                    <button
                      className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
                      type="button"
                      onClick={() => deleteContactHandler(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col font-bold text-red-800 m-3 p-3 border-2 border-black ">
          <span>No Contact Found </span> <span>Please add contact from</span>
          <span> Create Contact Button!</span>
        </div>
      )}
    </div>
  );
};

export default ContactList;
