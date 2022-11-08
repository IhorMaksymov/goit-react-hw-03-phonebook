import { Component } from "react";
import { nanoid } from 'nanoid';

import { Box } from "./Box/Box";
import Section from "./Section";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);

    if (parsetContacts) {
      this.setState({ contacts: parsetContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmit = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.includesContact(name) ?
    alert(`${name} is alredy in your contacts`) : 
    this.setState(({contacts}) => ({
        contacts: [contact, ...contacts]
    }))
  }

  filterContact = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }

  visibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeContact = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContact));
  }

  includesContact = (contactName) => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name.toLowerCase() === contactName.toLowerCase());
  }

  deleteContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {

    const { filter } = this.state;
    const visible = this.visibleContact();

    return (
      <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
      >
        <Section title={'Phonebook'}>
          <ContactForm contacts={this.formSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filter={filter} onChange={this.filterContact} />
          <ContactList contacts={visible} deleteContact={this.deleteContact} />
        </Section>
      </Box>
    );
  }
}
