import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateContactInfo } from "../redux/slices/contacts";

const UpdateContact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const contactInfo = useAppSelector((state) => state.contactInfo);
  const dispatch = useAppDispatch();

  //finding contact which we want to update
  const contact = contactInfo.contacts.find(
    (contact) => Number(contact.id) === Number(id)
  );

  //setting up previous value into the current state
  useEffect(() => {
    setFirstName(contact ? contact.firstName : "");
    setLastName(contact ? contact.lastName : "");
    setStatus(contact ? true : false);
  },[]);

  //handling user input for the contact informations
  const handleContactForm = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateContactInfo({ firstName, lastName, status, id }));

    //navigate to contacts list page
    navigate('/contacts/');
  };

  return (
    <>
      <div className="flex flex-col items-center mt-2 ">
        {/* Update contact form */}
        <form className="w-full max-w-sm bg-sky-200 p-4">
          <h1 className="flex justify-center mb-3 font-bold">
            Update contact form
          </h1>
          <div className="md:flex md:items-center mb-4">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                First Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                type="text"
                value={firstName}
                placeholder="Prabhas"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Last Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
                type="text"
                value={lastName}
                placeholder="kumar"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-7">
                Status
              </label>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => setStatus(true)}
                />
                <label className="ml-2 text-sm font-medium dark:text-gray-900">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => setStatus(false)}
                />
                <label className="ml-2 text-sm font-medium dark:text-gray-900 ">
                  Inactive
                </label>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-sky-500 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded mr-2"
                type="button"
                onClick={(e) => handleContactForm(e)}
              >
                Submit
              </button>

              <button
                className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
                type="button"
                onClick={() => navigate('/contacts')}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateContact;
