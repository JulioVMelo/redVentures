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

  @media (max-width: 570px) {
    padding: 10px;
  }
`;

export const Choice = styled.div`
  position: relative;
  width: 215px;
  border-radius: 5px;
  background-color: ${props => (props.background ? props.color : '#fff')};
  margin-bottom: 20px;
  height: 190px;
  min-width: 215px;
  transition: all 0.4s linear;

  &:hover {
    background-color: ${props => props.color};

    label {
      transition: all 0.4s linear;

      svg {
        fill: #fff;
      }

      span {
        color: #fff;
        font-weight: 600;
      }
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  }

  label {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 40px 0;

    svg {
      fill: ${props => (props.background ? '#fff' : props.color)};
      width: 70px;
    }

    span {
      color: ${props => (props.background ? '#fff' : ' #6e6e6e')};
      font-size: 1.6rem;
      font-weight: ${props => (props.background ? 600 : 300)};
      margin-top: 22px;
      text-transform: capitalize;
    }
  }
`;

export const ListChoice = styled.section`
  width: 460px;
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
