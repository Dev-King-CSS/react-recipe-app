import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  abbr {
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .Container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-gap: 1cm;
    width: 100%;
    padding: 1cm 2cm;
  }
`
