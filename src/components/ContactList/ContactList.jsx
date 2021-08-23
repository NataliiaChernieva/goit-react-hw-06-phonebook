import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  const filterValue = useSelector((state) => state.filter);
  // console.log(`filter`, filterValue)

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue),
  );
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
}

