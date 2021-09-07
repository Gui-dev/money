import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th, td {
      font-size: 1.6rem;
      line-height: 1.5rem;
      color: var(--text);
      padding: 1.6rem 3.2rem;
    }

    tr {

    }

    td {
      color: var(--white);
      background-color: var(--dark);
      border: 0;

      &:first-child {
        color: var(--text);
      }

      &.deposit {
        color: var(--emphasis);
      }

      &.withdraw {
        color: var(--red);
      }

    }
  }
`
