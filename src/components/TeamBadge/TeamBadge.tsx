import React, { FC } from 'react';
import styled from 'styled-components';

import { teamsList } from '../../constants';

interface Team {
  label: string;
  conditionList: {
    dividedBy: number;
  }[];
  textColor: string;
  backgroundColor: string;
}

interface TeamBadgeProps {
  userId: number;
}

const TeamBadgeWrapper = styled.span`
  display: inline-block;
  padding: 2px 4px 2px 4px;
  border-radius: 2px;
  margin-right: 8px;
`;

export const TeamBadge: FC<TeamBadgeProps> = ({ userId }) => {
  const whichTeam = (id: number, teams: Team[]) => {
    for (const team of teams) {
      for (const [conditionIndex, condition] of team.conditionList.entries()) {
        if (id % condition.dividedBy) {
          break;
        } else if (conditionIndex === team.conditionList.length - 1) {
          return (
            <TeamBadgeWrapper
              style={{
                backgroundColor: team.backgroundColor,
                color: team.textColor,
              }}
            >
              {team.label}
            </TeamBadgeWrapper>
          );
        }
      }
    }

    return <span />;
  };

  return whichTeam(userId, teamsList);
};
