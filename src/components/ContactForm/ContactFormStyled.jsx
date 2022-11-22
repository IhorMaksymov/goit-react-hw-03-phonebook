import styled from "styled-components";
import { Form } from 'formik';

export const FieldForm = styled(Form)`
    border: 1px solid ${p => p.theme.colors.brColors};
    padding: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[3]}px;
`;