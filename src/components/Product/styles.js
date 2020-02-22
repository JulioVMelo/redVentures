import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 13px 27px 25px 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 268px;
  margin-bottom: 53px;

  .image {
    margin-bottom: 12px;
  }

  h2 {
    font-size: 1.8rem;
    color: #15573f;
    font-weight: 600;
    margin-bottom: 5;
    text-align: left;
    width: 100%;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    width: 100%;
    margin-top: 10px;

    span {
      font-size: 1.8rem;
      color: #6e6e6e;
      font-weight: 300;
    }
  }

  button {
    background-color: transparent;
    border-radius: 25px;
    border: 1px solid #15573f;
    font-size: 1.6rem;
    font-weight: 300;
    color: #15573f;
    width: 100%;
    text-align: center;
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
      background-color: #15573f;
      color: #fff;
    }
  }
`;
