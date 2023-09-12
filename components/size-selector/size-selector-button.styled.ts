import styled from 'styled-components'

export const SelectSizeButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 1.6rem;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#007bff')};
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover {
    background-color: #0063cd;
    color: #fff;
  }
`
