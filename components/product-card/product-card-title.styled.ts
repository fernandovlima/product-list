import styled from 'styled-components'
import { linesToShow } from '@/styles/utils'

export const ProductCardTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  width: 100%;
  text-transform: uppercase;
  ${linesToShow(1)}
`
