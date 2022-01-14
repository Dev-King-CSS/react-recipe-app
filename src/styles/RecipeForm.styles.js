import styled from "styled-components"

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1cm;

  input {
    width: 30rem;
    height: 3rem;
    padding: 1rem;
    font-size: 1.25rem;
    outline: none;
    border: 0.0625rem solid #aaa;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  button {
    background-color: #00aaff99;
    border: none;
    outline: none;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      transform: translateY(-1.5px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`
