import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export type Contacts = Contact[];

export type Contact = {
  firstName: string;
  lastName: string;
  status: boolean;
  id: number;
};

// Define the initial state using that type
type ContactsArray = {
  contacts: Array<Contact>;
};
const initialContactInfo: ContactsArray = { contacts: [] };

const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState: initialContactInfo,
  reducers: {
    addContactInfo: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContact: (state, action) => {
        const updatedContacts = state.contacts.filter((contact) => contact.id !== action.payload);

        state.contacts = updatedContacts;
    },

    updateContactInfo: (state, action) => {
        //finding conatct index from the contacts list which we want to update
        const updateContactIndex = state.contacts.findIndex((contact) => contact.id == action.payload.id);
        //updating the contacts list
        state.contacts[updateContactIndex] = action.payload;
    }
  },
});

export const { addContactInfo, deleteContact, updateContactInfo } = contactInfoSlice.actions;
export default contactInfoSlice.reducer;
