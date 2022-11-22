import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const Item = styled.li`
    display: flex;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
    margin-right: ${p => p.theme.space[3]}px;
`;

export const Btn = styled.button`
    background: ${p => p.theme.colors.baseWhite};;
    border: 1px solid ${p => p.theme.colors.btnColor};
    border-radius: ${p => p.theme.radii.normal};
    text-transform: uppercase;
    &:hover {
    box-shadow: 0 0 5px 2px ${p => p.theme.colors.btnColor} inset;
`;