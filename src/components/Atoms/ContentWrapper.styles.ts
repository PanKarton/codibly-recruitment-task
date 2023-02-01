import styled from 'styled-components';

export const ContentWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-wrapper {
    height: 50%;
    width: 50%;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0.375rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
