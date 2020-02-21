import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #f6f6f6;
  padding: 61px;
  min-height: 100vh;
  position: relative;
`;

export const ListChoice = styled.section`
  width: 715px;
  max-width: 100%;

  .form {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    button {
      padding: 16px 21px;
      border-radius: 25px;
      border: 1px solid #15573f;
      background-color: transparent;
      font-size: 1.6rem;
      color: #15573f;
      font-weight: 300;
      display: flex;
      align-items: center;
      cursor: pointer;

      &.-next {
        img {
          transform: rotate(180deg);
        }
      }

      img {
        width: 20px;
        margin-right: 15px;
      }
    }
  }
`;
