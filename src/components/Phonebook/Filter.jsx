import PropTypes from 'prop-types';
import { Component } from "react"
import styles from './Phonebook.module.css'

export class Filter extends Component{
    static propType = {
        value:PropTypes.string.isRequired
    }

    hendleFilterInput = (event) => {
    const {value} = event.target
    this.props.hendleFilter(value)
}
    render() {
        return (
            <label className={styles.find_label}>
          Find contacts by name
            <br/><input type="text" name="filter"
                value={this.props.filter}
                    onChange={this.hendleFilterInput}
                className={styles.find_input}/>
        </label>
        )
    }
}