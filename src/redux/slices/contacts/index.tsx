import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export type Contacts = Contact[];

export type Contact = {
  firstName: string;
  lastName: string;
  status: boolean;
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
      state.contacts = [state.contacts, action.payload];
    },
  },
});

export const { addContactInfo } = contactInfoSlice.actions;
export default contactInfoSlice.reducer;
