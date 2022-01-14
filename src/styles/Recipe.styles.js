import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 0.063rem solid #ccc;
  border-radius: 1rem;
  padding: 1rem 2rem;
  width: max-content;

  h1 {
    font-size: 2rem;
    cursor: pointer;
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    padding: 0 5px;
    background-repeat: no-repeat;
    background-size: 100% 0.2rem;
    background-position: 0 95%;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-size: 100% 100%;
    }
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
    pointer-events: none;
    user-select: none;
  }

  ul {
    list-style: circle;
    font-size: 1.2rem;

    li {
      font-size: 1rem;

      &:first-child {
        margin-top: 0.5rem;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
  }
`
