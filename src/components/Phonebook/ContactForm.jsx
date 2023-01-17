import PropTypes from 'prop-types';
import { Component } from "react";
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'
export class ContactForm extends Component{

      state = {
     name: '',
    number: '',
      }
    static propType = {
        hendleSubmit:PropTypes.func.isRequired
    }
    
    hendleChange = event => {
    const { name, value } = event.currentTarget
        this.setState({ [name]: value })
        
    }
    
    hendleSubmitForm = (event) =>{
        event.preventDefault()
        this.props.hendleSubmit(this.state.name, this.state.number)
        this.reset()
    }

      reset = () => {
    this.setState({ name: "" })
    this.setState({number: ""})
  }
    
    
    render() {
        return (
        <form onSubmit={this.hendleSubmitForm} className={styles.form}>
        <label className={styles.form_label}>
          Name
          <br/><input
  type="text"
        name="name"
        value={this.state.name}
                        onChange={this.hendleChange}
                        className={styles.form_input}
                        
        id={
          nanoid()
        }
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
          </label><br/>
          <label className={styles.form_label}>
            Number
            <br/><input
  type="tel"
              name="number"
              value={this.state.number}
                        onChange={this.hendleChange}
                        className={styles.form_input}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label><br/>
        <button type='submit' className={styles.form_btn}>Add contact</button>
        </form>

    )
}
}