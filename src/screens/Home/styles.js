import styled from 'styled-components';
import myImage from '../../assets/images/illustration.png';

export const Container = styled.div`
  padding: 62px 174px 0 174px;
  background-image: url(${myImage});
  background-size: 779px;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-position: 90% bottom;

  .logo {
    margin-bottom: 96px;
    max-width: 208px;
  }

  .call {
    width: 340px;

    h1 {
      font-size: 6.6rem;
      color: #0c261c;
      font-weight: 900;
      line-height: 80px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 930px) {
    padding: 10px;
    background-position: bottom;
    background-size: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      margin-bottom: 45px;
    }

    .call {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;

      h1 {
        font-size: 3.5rem;
        line-height: initial;
      }
    }
  }
`;
