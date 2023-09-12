import styled from 'styled-components'

export const PaginationButtonContainer = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  padding: 0.8rem 1.2rem;
  height: 3rem;
  width: 3rem;

  border: none;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#007bff')};
  cursor: pointer;
  border-radius: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`
