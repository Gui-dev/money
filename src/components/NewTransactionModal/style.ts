import styled from 'styled-components'
import { transparentize } from 'polished'

type RadioBoxProps = {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#0A592C',
  red: '#E52E4D'
}

export const Container = styled.form`

  .react-modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  h2 {
    font-size: 1.6rem;
    color: var(--text);
    margin-bottom: 2rem;
  }

  input {
    font-size: 1.6rem;
    color: var(--white);
    padding: 0 2rem;
    height: 6rem;
    width: 100%;
    background-color: var(--dark);
    border: 1px solid #141414;
    border-radius: 0.4rem;
    outline-color: var(--highlight);

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type=submit] {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--dark);
    margin-top: 1.6rem;
    padding: 0 2rem;
    height: 5rem;
    width: 100%;
    background-color: var(--highlight);
    border: 0;
    border-radius: 0.4rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: var(--marking);
  border: 2px solid ${
    ({ isActive, activeColor }) => isActive
      ? transparentize(0.1, colors[activeColor])
      : 'var(--text)'
  };
  border-radius: 0.4rem;
  transition: border-color 0.2s;

  img {
    height: 2rem;
    width: 2rem;
  }

  span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${
    ({ isActive, activeColor }) => isActive
      ? transparentize(0.1, colors[activeColor])
      : 'var(--text)'
  };
    margin-left: 1rem;
  }

  &:hover {
    border-color: ${
    ({ isActive, activeColor }) => isActive
      ? transparentize(0.8, colors[activeColor])
      : 'var(--text)'
  };
  }
`
