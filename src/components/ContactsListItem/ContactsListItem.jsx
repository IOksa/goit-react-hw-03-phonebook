import css from './ContactsListItem.module.css';

const ContactsListItem = ({contact:{id, name, number}, onDeleteContact}) => {
return (
    <>
    <div className={css.contactListItem__contactThumb}>
        <p>{name}: </p>
        <p>{number}</p>
    </div>
    <button
    type="button"
    onClick={() => onDeleteContact(id)}
    className={css.contactListItem__button}
    >
    Delete
    </button>
    </>
    );                  
};

export default ContactsListItem;