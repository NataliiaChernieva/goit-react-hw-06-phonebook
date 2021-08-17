import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Title,
  SectionTitle,
} from './components/Container/Container.styled.jsx';
import Form from './components/Form/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Input from './components/Input/Input.jsx';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactList')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  // const formSubmitHandle = ({ name, number }) => {
  //   const contact = { name, number, id: uuidv4() };
  //   contacts.find(savedContact => savedContact.name === name)
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(prevContacts => [...prevContacts, contact]);
  // };

  // const handleDelete = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const normaliseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normaliseFilter),
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form/>
      {contacts.length !== 0 && <SectionTitle>Contacts</SectionTitle>}
      {contacts.length !== 0 && (
        <Input
          name="Find contacts by name"
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      )}
      <ContactList contacts={filteredContacts}/>
    </Container>
  );
}
