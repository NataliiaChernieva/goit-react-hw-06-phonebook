import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  // console.log(`contacts`, contacts);

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  // const normaliseFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normaliseFilter),
  // );
  
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          // handleDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

