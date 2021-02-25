import { css } from '@emotion/core';
import * as React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

import { HistoryCard, ProfileCard, Toolbar } from '../../components';
import { navigationLinks } from '../../constants';
import { breakpoints, colors, loaderSize, media } from '../../styles';

export interface UserDetailsLayoutProps {
  isFetching: boolean;
}

const override = css`
  position: fixed;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 6001;
`;

const UserDetailsLayoutContainer = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;

  ${media.small} {
    padding: 12px 12px 40px;
    height: 100%;
  }
`;

const UserDetailsContainer = styled.div`
  margin: auto;
  max-width: ${breakpoints.large};
  background-color: ${colors.background};
  padding: 80px 30px 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.small} {
    grid-template-columns: 1fr;
  }
`;

const LoaderBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 6000;
  text-align: center;
`;

export const UserDetailsLayout = ({ isFetching }: UserDetailsLayoutProps) => (
  <UserDetailsLayoutContainer>
    <Toolbar navigationLinks={navigationLinks} />
    {!isFetching && (
      <UserDetailsContainer>
        <ProfileCard />
        <HistoryCard />
      </UserDetailsContainer>
    )}
    <ClipLoader
      color={colors.secondaryText}
      loading={isFetching}
      size={loaderSize}
      css={override}
    />
    <LoaderBackground style={isFetching ? {} : { display: 'none' }} />
  </UserDetailsLayoutContainer>
);
