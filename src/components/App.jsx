import { Component } from "react";
import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'


export class App extends Component{
  state = {
  contacts: [],
  filter: ''

  }


  hendleSubmit = (name, number) => {
    console.log(name, number)
    
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts.`)
    }


    this.setState({ contacts: [...this.state.contacts, {name, number}] })


  }
  

     onDelete = (index) => {

    this.setState(this.state.contacts.splice(index, 1))
  }

      hendleFilter = (value) => {
        this.setState({ filter: value})
        
    }


  hendleFind = () => {
    const {contacts} = this.state
    const normalizedFilter = this.state.filter.toLowerCase();
    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ))
    
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm hendleSubmit={ this.hendleSubmit } />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={this.state.filter} hendleFilter={ this.hendleFilter}/>
        <ContactList contacts={this.hendleFind()} onDeleteItem = {this.onDelete}/>
      </div>
    )
  }
}