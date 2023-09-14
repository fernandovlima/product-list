import styled from 'styled-components'

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 24%));
  grid-gap: 1.6rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 40%));
    padding: 1.6rem;
  }

  @media (max-width: 528px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 80%));
  }
`
