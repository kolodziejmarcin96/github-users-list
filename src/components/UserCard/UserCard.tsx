import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Image, TeamBadge } from '../';
import logoAlt from '../../assets/logo-alt.svg';
import { User } from '../../store/app/types';
import { colors } from '../../styles';

interface UserCardProps {
  user: User;
}

const Avatar = styled(Image)`
  margin-right: 12px;
  border-radius: 4px;
  height: 76px;
  width: 76px;
`;

const GitHubTypographyLogo = styled(Image)`
  height: 12px;
  width: 12px;
  margin-right: 6px;
`;

const UserLoginTypography = styled(Typography)`
  margin-bottom: 6px;
  line-height: 1;
  font-size: 18px;
`;

const DetailsTypography = styled(Typography)`
  line-height: 1;
  color: ${colors.secondaryText};
  font-size: 12px;
`;

const GitHubPageLink = styled.a`
  line-height: 1;
  color: ${colors.secondaryText};
  font-size: 12px;
  text-decoration: none;
`;

const BaseUserInfo = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 88px auto;
`;

const DetailsButton = styled.div`
  padding: 12px;
  text-align: center;
`;

const UserCardWrapper = styled(Paper)`
  background-color: ${colors.secondaryBackground};
  color: ${colors.baseText};
  box-shadow: none;
  border-radius: 4px;
  margin: 10px;
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

const DetailsGitHubContainer = styled.div`
  margin-top: auto;
  display: inline-flex;
`;

const DetailsUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <UserCardWrapper>
      <BaseUserInfo>
        <Avatar src={user.avatar_url} />
        <DetailsUserContainer>
          <div>
            <UserLoginTypography>{user.login}</UserLoginTypography>
            <DetailsTypography>
              <TeamBadge userId={user.id} />
              <span>ID: #{user.id}</span>
            </DetailsTypography>
          </div>
          <DetailsGitHubContainer>
            <GitHubTypographyLogo src={logoAlt} />
            <GitHubPageLink href={user.html_url} target="_blank">
              GitHub page
            </GitHubPageLink>
          </DetailsGitHubContainer>
        </DetailsUserContainer>
      </BaseUserInfo>
      <Divider />
      <DetailsButton>
        <NavigationLinkWrapper>
          <NavLink to={`/user-details/${user.login}`}>Details</NavLink>
        </NavigationLinkWrapper>
      </DetailsButton>
    </UserCardWrapper>
  );
};
