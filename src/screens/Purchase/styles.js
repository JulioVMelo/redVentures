import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  padding: 61px;
  min-height: 100vh;
  position: relative;

  .cart {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 902px;
    flex-wrap: wrap;
  }

  .boxInput {
    max-width: 380px;
    width: 100%;
    background-color: #f6f6f6;
    padding: 43px 50px;
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 4rem;
      margin-bottom: 16px;
      color: #0c261c;
    }

    > p {
      margin-bottom: 30px;
      font-size: 1.6rem;
      font-weight: 300;
      color: #6e6e6e;
      line-height: 29px;
    }

    button {
      align-self: flex-end;
      background-color: transparent;
      padding: 15px 25px;
      width: fit-content;
      border-radius: 25px;
      font-size: 1.6rem;
      font-weight: 300;
      color: #15573f;
      border: 1px solid #15573f;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  label {
    color: #6e6e6e;
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: 900;
  }

  input {
    background-color: #fff;
    border-radius: 19px;
    border: 0;
    font-size: 14px;
    color: #6e6e6e;
    padding: 12px 24px;

    &::placeholder {
      color: #d0d0d0;
      font-size: 14px;
    }
  }
`;
