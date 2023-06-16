import React, {Component} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import css from './App.module.css';

class App extends Component{
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',

  }

  addContact = ({name, number})=> {
    const contact = {
      id: nanoid(),
      name,
      number,

    };
    console.log("addContact name=", name);
    console.log("addContact contact=", contact);

    const normalizedName = name.toLowerCase();
    console.log("addContact normalizedName=", normalizedName);

    const isInContacts=this.state.contacts.findIndex(({name})=>name.toLowerCase()===normalizedName );

    console.log("addContact isInContacts=", isInContacts);

    if(isInContacts===-1){
      this.setState(({ contacts }) => ({contacts: [ ...contacts, contact]}));
    }
    else{
      alert(`${name} is already in contacts`);
    }
   
    console.log("this.state.contacts=", this.state);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };



  render(){
    const {filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return(
    <>
    <Container>
    <h1 className={css.phonebook__title}>Phonebook</h1>
    <ContactForm onSubmit={this.addContact}/>
    <Filter value={filter} onChange={this.changeFilter} />
    <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </Container>
    </>
    );
  }
}

export default App;
