import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 2px #d1d5db solid;
  outline: none;
`;

export const StyledButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.1rem 0.6rem;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
  }
`;