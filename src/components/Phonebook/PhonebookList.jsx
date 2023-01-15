import { nanoid } from 'nanoid'

export const PhonebookList = ({contacts, find}) => {
return (
            <ul>
                {contacts.map(({ name, tel }) =>
                <li key={nanoid()}>
                        {name}: {tel}
                    </li>
                )}
             </ul>
         )
}