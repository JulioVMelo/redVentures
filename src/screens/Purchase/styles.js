import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  padding: 61px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 922px) {
    padding: 10px 0;
  }

  .cart {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 902px;
    flex-wrap: wrap;

    @media (max-width: 922px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Success = styled.section`
  background-color: #f6f6f6;
  padding: 45px 80px;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #0c261c;
    font-size: 3.5rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.6rem;
    color: #6e6e6e;
    line-height: 27px;
    margin-bottom: 36px;
    font-weight: 300;
    text-align: center;
  }
`;
