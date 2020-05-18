import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../styles/media"


export default function Header() {
  
  const NavLinks = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem 2%;
    width: 100%;

    ${media.m`
      justify-content: center;

    `}
   `;

  const ListLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: rgb(61, 116, 235);
    font-family: Roboto, sans serif, monospace;

    &.name {
      font-size: 3.2rem;
      margin-right: auto;
    }

    &.home, &.about {
      margin-right: 2rem;
    }
  `;

  return(
      <NavLinks>
          <ListLink className="name" to="/">Hickey</ListLink>
          <ListLink className="home">Home</ListLink>
          <ListLink className="about" to="/about/">About</ListLink>
          <ListLink className="contact" to="/contact/">Contact</ListLink>
      </NavLinks>
  )
}