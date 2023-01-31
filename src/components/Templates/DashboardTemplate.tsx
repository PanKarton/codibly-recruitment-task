import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NumberInput } from '../Atoms/NumberInput';

type Props = {
  children: ReactNode;
};

export const DashboardTemplate = ({ children }: Props) => {
  return (
    <StyledMain>
      <div className="wrapper">
        <NumberInput />
        {children}
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    height: 50%;
    width: 50%;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0.375rem 1rem;
  }
`;
