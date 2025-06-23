import React from 'react'
import styled from 'styled-components'
import i from "../assets/shop/1.jpg"

const FullFrame = styled.img`
    border-radius: 40px;
    border: solid 9px var(--color-primary);
    height: 60%;
`

const ItemFrame = () => {
  return (
    <FullFrame src={i} />
  )
}

export default ItemFrame