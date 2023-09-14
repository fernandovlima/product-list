'use client'
import styled from 'styled-components'

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.4rem 0;
  gap: 2.4rem;

  @media (max-width: 1200px) {
    margin-bottom: 2rem;
    gap: 1.6rem;
    padding-bottom: 2.4rem;
  }
`
