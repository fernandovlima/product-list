import styled from 'styled-components'
interface StyledButtonProps {}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover {
    background-color: #0056b3;
  }
`
