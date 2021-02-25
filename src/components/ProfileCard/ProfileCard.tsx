import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/reducer";
import styled from "styled-components";

import { Image, TeamBadge } from "../";
import logoAlt from "../../assets/logo-alt.svg";
import { colors } from "../../styles";

const Avatar = styled(Image)`
  margin-right: 12px;
  border-radius: 4px;
  height: 120px;
  width: 120px;
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
  font-weight: 600;
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
  padding: 20px 0px 40px 0px;
  display: grid;
  grid-template-columns: 132px auto;
`;

const RepositoriesContainer = styled.div``;
const RepositoriesContent = styled.div`
  padding-top: 20px;
`;

const ProfileCardWrapper = styled(Paper)`
  padding: 20px;
  background-color: ${colors.secondaryBackground};
  color: ${colors.baseText};
  box-shadow: none;
  border-radius: 4px;
  margin: 10px;
  height: fit-content;
`;

const DetailsGitHubContainer = styled.div`
  margin-top: auto;
  display: inline-flex;
`;

const DetailsUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

const SubTitle = styled.span`
  padding-bottom: 10px;
  font-weight: 600;
`;

const RepoList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const RepositoriesCountContainer = styled.div`
  padding-bottom: 5px;
`;

export const ProfileCard = () => {
  const userRepos = useSelector((state: AppState) => state.app.userRepos);
  const userDetails = useSelector((state: AppState) => state.app.userDetails);

  return (
    <ProfileCardWrapper>
      <Title>Profile</Title>
      <BaseUserInfo>
        <Avatar src={userDetails.avatar_url} />
        <DetailsUserContainer>
          <div>
            <Title>{userDetails.login}</Title>
            <UserLoginTypography>@{userDetails.login}</UserLoginTypography>
            <DetailsTypography>
              <TeamBadge userId={userDetails.id} />
              <span>ID: #{userDetails.id}</span>
            </DetailsTypography>
          </div>
          <DetailsGitHubContainer>
            <GitHubTypographyLogo src={logoAlt} />
            <GitHubPageLink href={userDetails.html_url} target="_blank">
              GitHub page
            </GitHubPageLink>
          </DetailsGitHubContainer>
        </DetailsUserContainer>
      </BaseUserInfo>
      <RepositoriesContainer>
        <Title>Repositories</Title>
        <RepositoriesContent>
          <RepositoriesCountContainer>
            <SubTitle>RepositoriesCount: </SubTitle>
            {userRepos.length}
          </RepositoriesCountContainer>
          <div>
            <SubTitle>RepositoriesList: </SubTitle>
            <RepoList>
              {userRepos.map((repo, index) => (
                <li key={index}>{repo.name}</li>
              ))}
            </RepoList>
          </div>
        </RepositoriesContent>
      </RepositoriesContainer>
    </ProfileCardWrapper>
  );
};
