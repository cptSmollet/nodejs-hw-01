import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    const removedContact = contacts.pop();

    await writeContacts(contacts);

    console.log(`Removed contact: ${removedContact.name}`);
  } catch (error) {
    console.error('Error removing contact:', error);
  }
};

removeLastContact();
