import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactsList = ({contacts, onDeleteContact})=>(
    <>
    <h2 className={css.contactList__title}>Contacts</h2>
    <ul className={css.contactList__list}>
        {contacts.map(({id, name, number})=>(
            <li key={id} className={css.contactList__item}>
                <div className={css.contactList__contactThumb}>
                <p>{name}: </p>
                <p>{number}</p>
                </div>
                <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={css.contactList__button}
                >
                Delete
                </button>
            </li>
        
        ))}
    </ul>
    </>
);

export default ContactsList;

ContactsList.propTypes={
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
}; 