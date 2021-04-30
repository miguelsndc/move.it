import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  color: var(--title);

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;
export const CountdownButton = styled.button.attrs({ type: 'button' })`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  &:focus {
    outline: var(--blue-dark);
  }

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
    border-bottom: 5px solid var(--green);
  }
`;
export const CountdownButtonActive = styled(CountdownButton)`
  background: var(--white);
  color: var(--title);

  &:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }
`;