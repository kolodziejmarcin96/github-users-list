import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/reducer";
import styled from "styled-components";

import { Image } from "../";
import { months } from "../../constants";
import { colors } from "../../styles";

const CustomTimelineDot = styled(TimelineDot)`
  margin: 0px;
`;

const LastFirstTimelineDot = styled(TimelineDot)`
  margin: 0px;
  visibility: hidden;
`;

const LastFirstTimelineItem = styled(TimelineItem)`
  min-height: 30px;
`;

const CustomTimelineItem = styled(TimelineItem)`
  min-height: 80px;
`;

const CustomTimelineContent = styled(TimelineContent)`
  padding: 0px 0px 10px 10px;
  color: ${colors.secondaryText};
  font-weight: 600;
`;

const Avatar = styled(Image)`
  margin-right: 6px;
  border-radius: 4px;
  height: 32px;
  width: 32px;
`;

const UserLoginTypography = styled.div`
  color: ${colors.baseText};
  font-weight: 600;
  line-height: 1.2;
`;

const BaseUserInfo = styled.div`
  display: grid;
  grid-template-columns: 38px auto;
  padding-top: 10px;
`;

const DetailsUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.span`
  line-height: 1;
  font-size: 12px;
`;

const PullRequestLink = styled.a`
  color: ${colors.linkButton};
  text-decoration: none;
`;

const CustomTimeline = styled(Timeline)`
  padding: 0;
  .MuiTimelineItem-missingOppositeContent:before {
    display: none;
  }
`;

export const TimeLine = () => {
  const userHistory = useSelector((state: AppState) => state.app.userHistory);
  const convertDate = (dateToConvert: string) => {
    if (!dateToConvert) {
      return <span />;
    }
    const YEAR_DATE_COL = 0;
    const MONTH_DATE_COL = 1;
    const DAY_DATE_COL = 2;
    const splittedDate = dateToConvert.split("-");
    const year = splittedDate[YEAR_DATE_COL];
    const month = months[Number(splittedDate[MONTH_DATE_COL]) - 1];
    const day = splittedDate[DAY_DATE_COL].split("T")[0];

    return month + " " + day + ", " + year;
  };

  return (
    <CustomTimeline>
      {userHistory.length > 0 ? (
        <LastFirstTimelineItem>
          <TimelineSeparator>
            <LastFirstTimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        </LastFirstTimelineItem>
      ) : undefined}
      {userHistory.map(
        ({ login, action, avatar_url, name, html_url, created_at }, index) => (
          <CustomTimelineItem key={index}>
            <TimelineSeparator>
              <CustomTimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <CustomTimelineContent>
              <DateContainer>{convertDate(created_at)}</DateContainer>
              <BaseUserInfo>
                <Avatar src={avatar_url} />
                <DetailsUserContainer>
                  <UserLoginTypography>
                    <span>
                      @{login} {action}{" "}
                    </span>
                    <PullRequestLink href={html_url} target="_blank">
                      pull request
                    </PullRequestLink>
                  </UserLoginTypography>
                  <UserLoginTypography>{name}</UserLoginTypography>
                </DetailsUserContainer>
              </BaseUserInfo>
            </CustomTimelineContent>
          </CustomTimelineItem>
        )
      )}
    </CustomTimeline>
  );
};
