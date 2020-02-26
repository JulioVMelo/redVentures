import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 215px;
  border-radius: 5px;
  background-color: ${props => (props.background ? props.color : '#fff')};
  margin-bottom: 20px;
  height: 190px;
  min-width: 215px;
  transition: all 0.4s linear;

  @media (max-width: 570px) {
    width: 100%;
    min-width: 100%;
    height: 74px;
  }

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

    @media (max-width: 570px) {
      flex-direction: row;
      justify-content: flex-start;
      padding: 20px;
      align-items: center;

      svg {
        margin-right: 30px;
        width: 42px;
      }

      span {
        margin-top: 0;
      }
    }
  }
`;
