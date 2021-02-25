import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolbarBase from "@material-ui/core/Toolbar";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Image } from "../";
import logo from "../../assets/logo.svg";
import { breakpoints, colors, media } from "../../styles";

interface ToolbarProps {
  navigationLinks?: {
    route: string;
    label: string;
  }[];
}

const ToolbarWrapper = styled(AppBar)`
  margin: auto;
  background-color: ${colors.secondaryBackground};
  color: ${colors.baseText};
  box-shadow: none;
  position: fixed;

  .MuiTypography-root {
    font-size: 24px;
  }
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

const Logo = styled(Image)`
  margin-right: 12px;
  height: 34px;
  width: 34px;
`;

const LogoContainer = styled.div`
  place-self: center;
`;

const NavigationContainer = styled.div`
  align-self: center;
`;

const Navigation = styled(ToolbarBase)`
  position: relative;
  min-height: 48px;
  padding: 0 14px;
  font-size: 14px;

  &::before {
    background-image: linear-gradient(
      90deg,
      ${colors.background} 0,
      ${colors.background} 10%,
      ${colors.background} 90%,
      ${colors.background} 100%
    );
    position: absolute;
    content: "";
    height: 1px;
    opacity: 0.1;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

const NavigationLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 4px;

  a {
    color: ${colors.linkButton};
    text-decoration: none;
    font-weight: 600;
    line-height: 24px;
    padding: 8px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const MaxWidthWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: center;
  max-width: ${breakpoints.large}px;
  min-width: ${breakpoints.large}px;
  margin: auto;
  padding: 0px 20px 0px 20px;

  ${media.medium} {
    max-width: ${breakpoints.medium}px;
    min-width: ${breakpoints.medium}px;
  }

  ${media.small} {
    max-width: ${breakpoints.small}px;
    min-width: ${breakpoints.small}px;
  }
`;

export const Toolbar: FC<ToolbarProps> = ({ navigationLinks }) => {
  return (
    <ToolbarWrapper>
      <MaxWidthWrapper>
        <NavigationContainer>
          {navigationLinks && (
            <Navigation>
              {navigationLinks.map((link) => (
                <NavigationLinkWrapper key={link.route}>
                  <NavLink to={link.route}>{link.label}</NavLink>
                </NavigationLinkWrapper>
              ))}
            </Navigation>
          )}
        </NavigationContainer>
        <LogoContainer>
          <ToolbarBase>
            <Header>
              <Logo src={logo} />
              <Typography>GitHub users</Typography>
            </Header>
          </ToolbarBase>
        </LogoContainer>
      </MaxWidthWrapper>
    </ToolbarWrapper>
  );
};
