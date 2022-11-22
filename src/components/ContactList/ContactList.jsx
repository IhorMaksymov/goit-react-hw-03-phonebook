import PropTypes from 'prop-types';
import { List, Item, Text, Btn } from './ContactListStyled';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => 
                <Item key={id}>
                    <Text>{name}</Text>
                    <Text>{number}</Text>
                    <Btn type='button' onClick={() => deleteContact(id)}>Delete</Btn>
                </Item>
            )}
        </List>
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