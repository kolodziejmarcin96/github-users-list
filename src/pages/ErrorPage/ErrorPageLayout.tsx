import { Divider, Paper } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Toolbar } from '../../components';
import { colors, media } from '../../styles';

const ErrorPageLayoutContainer = styled.div`
  background-color: ${colors.background};
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: 100vh;
  padding: 20px;

  ${media.small} {
    padding: 12px 12px 40px;
    height: 100%;
  }
`;

const WarningInfo = styled.div`
  text-align: center;
  min-width: 300px;
  font-weight: 600;
  padding: 60px 20px 60px 20px;
`;

const BackToHomeButton = styled.div`
  padding: 12px;
  text-align: center;
`;

const ErrorCardWrapper = styled(Paper)`
  background-color: ${colors.secondaryBackground};
  color: ${colors.baseText};
  box-shadow: none;
  border-radius: 4px;
  margin: auto;
  height: fit-content;
`;

const NavigationLinkWrapper = styled.div`
  place-content: center;

  a {
    color: ${colors.linkButton};
    text-decoration: none;
    font-weight: 600;
    line-height: 24px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ErrorPageLayout = () => (
  <ErrorPageLayoutContainer>
    <Toolbar />
    <ErrorCardWrapper>
      <WarningInfo>404 - Page not found</WarningInfo>
      <Divider />
      <BackToHomeButton>
        <NavigationLinkWrapper>
          <NavLink to={'/'}>Return to home</NavLink>
        </NavigationLinkWrapper>
      </BackToHomeButton>
    </ErrorCardWrapper>
  </ErrorPageLayoutContainer>
);
