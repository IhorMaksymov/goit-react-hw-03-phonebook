import PropTypes from 'prop-types';
import { Item, Text } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => 
                <Item key={id}>
                    <Text>{name}</Text>
                    <Text>{number}</Text>
                    <button type='button' onClick={() => deleteContact(id)}>Delete</button>
                </Item>
            )}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}