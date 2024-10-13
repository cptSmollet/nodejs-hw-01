import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    return writeContacts([]);
  } catch (error) {
    console.error('Something was wrong: ', error);
  }
};

removeAllContacts();