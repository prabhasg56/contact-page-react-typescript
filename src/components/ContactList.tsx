import React from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { deleteContact } from "../redux/slices/contacts";

const ContactList = () => {
  const contactInfo = useAppSelector((state) => state.contactInfo);
  const dispatch = useAppDispatch();

  const updateContactHandler = () => {};

  const deleteContactHandler = (id: number) => {
    dispatch(deleteContact(id));
  };

  console.log(contactInfo.contacts);
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="font-bold">CONTACTS LISTS</h2>
      {contactInfo.contacts.length ? (
        contactInfo.contacts.map((contact, key) => {
          return (
            <div className="flex flex-col" key={contact.id}>
              <div className="max-w-sm p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-green-200 dark:border-gray-700">
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
                    <button
                      className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded mr-2"
                      type="button"
                    >
                      Update
                    </button>

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
        <div className="flex flex-col font-bold text-red-800 m-3 p-3 border-2 border-black">
          <span>No Contact Found </span> <span>Please add contact from</span>
          <span> Create Contact Button!</span>
        </div>
      )}
    </div>
  );
};

export default ContactList;
