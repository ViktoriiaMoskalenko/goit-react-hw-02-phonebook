import PropTypes from 'prop-types';
import { Component } from "react";
import { nanoid } from 'nanoid'
import { PhonebookList } from './Phonebook/PhonebookList'


export class App extends Component{
  state = {
  contacts: [],
  name: '',
    number: '',
    filter: ''
  }

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
    filter: PropTypes.string
  }

hendleChange = event => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }
  hendleSubmit = event => {
    event.preventDefault()

//     this.state.contacts.map(el => {
//       if (el.name.includes(this.state.name)) {
//         this.setState({ contacts: [...this.state.contacts] })
//         return alert("NOT")
//   }
// })
    this.setState({ contacts: [...this.state.contacts, { name: this.state.name, tel:this.state.number}] })

    
    this.reset()
    console.log(this.state.contacts)

  }
  
  reset = () => {
    this.setState({ name: "" })
    this.setState({number: ""})
  }

     onDelete = (index) => {

    this.setState(this.state.contacts.splice(index, 1))
  }

  hendleFind = () => {
    if (this.state.filter) {
       return (
          <PhonebookList contacts={this.state.contacts.filter(el => el.name.includes(this.state.filter))}></PhonebookList>
        )
    } else {
      return (<PhonebookList contacts={this.state.contacts} onDeleteItem = {this.onDelete} ></PhonebookList>)
        }
    
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
          <input type="text" name="filter" value={this.state.filter} onChange={this.hendleChange} />
          {this.hendleFind()}
        </label>
      </div>
    )
  }
}