import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  overflow-x: scroll;

  section {
    color: var(--text-body);
    padding: 2.4rem 3.2rem;
    background-color: var(--marking);
    border-radius: 0.5rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--dark);
      }
    }

    strong {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 3rem;
      margin-top: 1rem;
    }
  }

  .highlight-background {
    color: var(--marking);
    background-color: var(--emphasis);

    h1 {
      color: var(--marking);
    }
  }

  @media (min-width: 720px) {
    overflow-x: hidden;
  }
`
