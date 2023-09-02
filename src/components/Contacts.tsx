import React, { useState } from "react";

import { useAppDispatch } from "../redux/hooks";
import { addContactInfo } from "../redux/slices/contacts";

const Contacts = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  //handling user input for the contact informations
  const handleContactForm = (e: React.FormEvent) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * (50 - 0 + 1)) + 0;

    dispatch(addContactInfo({ firstName, lastName, status, id }));

    setShowForm(!showForm);
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="flex flex-col items-center mt-2 ">
        {!showForm && (
          <button
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowForm(!showForm)}
          >
            Create Contact
          </button>
        )}

        {/* Contact form */}
        {showForm && (
          <form className="w-full max-w-sm bg-green-200 p-4">
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  First Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
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
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
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
                  className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded mr-2"
                  type="button"
                  onClick={(e) => handleContactForm(e)}
                >
                  Submit
                </button>

                <button
                  className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
                  type="button"
                  onClick={() => setShowForm(!showForm)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Contacts;
