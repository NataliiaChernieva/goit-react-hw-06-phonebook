import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  
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

