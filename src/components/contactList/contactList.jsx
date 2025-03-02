import Contact from "../contact/contact"
import css from './contactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={ contact } onDelete={onDelete} />
          </li>
        ))}
      </ul>
    )
}

export default ContactList