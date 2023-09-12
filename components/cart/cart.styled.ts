import styled from 'styled-components'

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border: none;
  border-radius: 4px;
  height: 48px;
  flex-shrink: 0;
  background: inherit;
`

export const CartTotal = styled.div`
  display: flex;
  position: relative;
`

export const TotalItems = styled.span`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background: #f44336;
  color: #fff;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: -6px;
  right: -20px;
  line-height: 1.4rem;
`
export const SubTotal = styled.p`
  text-align: right;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.12px;
`
