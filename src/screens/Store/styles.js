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

// export const ListChoice = styled.section`
//   width: 715px;
//   max-width: 100%;
// `;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    width: 226px;
  }

  h1 {
    color: #0c261c;
    font-size: 6.5rem;
    font-weight: 600;
    margin: 48px 0 78px 0;
  }
`;

export const ListProducts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 864px;
  flex-wrap: wrap;
`;
