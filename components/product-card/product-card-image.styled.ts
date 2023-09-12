import styled from 'styled-components'

export const ProductCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;

  img {
    object-position: center;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 30rem;
    width: 20rem;
  }
`
