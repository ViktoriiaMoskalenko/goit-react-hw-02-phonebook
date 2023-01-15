import { nanoid } from 'nanoid'
import React, { Component } from "react";
import { PhonebookList } from './Phonebook/PhonebookList'


export class App extends Component{
  state = {
  contacts: [],
  name: '',
    number: '',
    find: ''
  }
  
  hendleChange = event => {
    const {name, value} = event.currentTarget
    this.setState({ [name]: [value] })
  
  }
  hendleSubmit = event => {
    event.preventDefault()

    this.setState({ contacts: [...this.state.contacts, { name: this.state.name, tel:this.state.number}] })
    this.reset()
    console.log(this.state.contacts)

  }
  
  reset = () => {
    this.setState({ name: "" })
    this.setState({number: ""})
  }

  hendleFind = () => {
    // const {name, value} = event.currentTarget
    // this.setState({ [name]: value })
    if (this.state.find) {
        return (
          <PhonebookList contacts={this.state.contacts} find = {this.state.find}></PhonebookList>
        )
    }
    // console.log('Hello')
    //     this.setState(prevState => (this.state.contacts.find(el => console.log(el.name.join("") === prevState.find ? el : ""))))
    
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.hendleSubmit}>
        <label>
          Name
          <input
  type="text"
        name="name"
        value={this.state.name}
        onChange={this.hendleChange}
        id={
          nanoid()
        }
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
          </label>
          <label>
            Number
            <input
  type="tel"
              name="number"
              value={this.state.number}
              onChange={this.hendleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label>
        <button type='submit'>Add contact</button>
        </form>
        <label>
          Find contacts by name
          <input type="text" name="find" value={this.state.find} onChange={this.hendleChange} />
          {this.hendleFind()}
        </label>
      </div>
    )
  }
}