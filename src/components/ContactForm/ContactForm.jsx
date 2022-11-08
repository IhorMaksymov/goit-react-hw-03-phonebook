import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
})

const FieldForm = styled(Form)`
    border: 1px solid ${p => p.theme.colors.brColors};
    padding: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

const ContactForm = ({ contacts }) => {
    const handleSubmit = (values, { resetForm }) => {
        contacts(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <FieldForm autoComplete='off'>
                <Label htmlFor=''>
                    Name
                    <Field
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor="">
                    Number
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <button type='submit'>Add contact</button>
            </FieldForm>
        </Formik>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    contacts: PropTypes.func.isRequired
}