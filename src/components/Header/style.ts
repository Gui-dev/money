import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--dark);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1.6rem;
    color: var(--dark);
    padding: 0 2rem;
    height: 3rem;
    background-color: var(--highlight);
    border-radius: 0.4rem;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
