import { nanoid } from 'nanoid'

export const PhonebookList = ({contacts, onDeleteItem}) => {
return (
            <ul>
                {contacts.map(({ name, tel }, index) =>
                <li key={nanoid()}>
                        <span>{name}: {tel}</span>
                        <span></span>
                        <button type='button' onClick={()=>onDeleteItem(index)} key = {index}>Delete</button>
                    </li>
                )}
             </ul>
         )
}