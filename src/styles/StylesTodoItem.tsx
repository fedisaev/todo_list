import styled from 'styled-components';

export const StyledLi = styled.li`
  border-bottom: 2px solid gray;
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 1fr 0.1fr;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1.25rem;
  gap: 1rem;

  &:active {
    cursor: grab;
  }
`;

export const StyledS = styled.s`
  display: flex;
  justify-content: space-between;
  color:red;
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledInputEdit = styled.input`
  flex-grow: 1;
  padding: 0.1rem;
  border: 2px #d1d5db solid;
  outline: none;
`;