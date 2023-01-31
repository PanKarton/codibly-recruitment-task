import React, { ReactNode } from 'react';
import { ContentWrapper } from 'src/components/Atoms/ContentWrapper/ContentWrapper.styles';
import { NumberInput } from '../../Atoms/NumberInput/NumberInput';

type Props = {
  children: ReactNode;
};

export const DashboardTemplate = ({ children }: Props) => {
  return (
    <main>
      <ContentWrapper>
        <div className="content-wrapper">
          <NumberInput />
          {children}
        </div>
      </ContentWrapper>
    </main>
  );
};
