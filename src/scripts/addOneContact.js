import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const addContact = createFakeContact();
    contacts.push(addContact);

    writeContacts(contacts);
  } catch (error) {
    console.error('Some error: ', error);
  }
};
addOneContact();
