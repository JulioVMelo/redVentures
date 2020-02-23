import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 5rem;
    color: #0c261c;
    line-height: 55px;
    margin-bottom: 10px;
  }

  span {
    color: #d6d6d6;
    font-size: 2.4rem;
    font-weight: 300;
  }

  .image {
    margin-top: 25px;
    margin-bottom: 30px;
  }

  .properties {
    margin-top: 26px;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 21px;

      img {
        width: 28px;
        margin-right: 13px;
      }

      span {
        font-size: 1.6rem;
        color: #6e6e6e;
      }
    }
  }
`;
