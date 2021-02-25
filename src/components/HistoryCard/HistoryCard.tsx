import Paper from '@material-ui/core/Paper';
import React from 'react';
import styled from 'styled-components';

import { TimeLine } from '../';
import { colors } from '../../styles';

const HistoryCardWrapper = styled(Paper)`
  padding: 20px;
  background-color: ${colors.secondaryBackground};
  color: ${colors.baseText};
  box-shadow: none;
  border-radius: 4px;
  margin: 10px;
  height: fit-content;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

const TimeLineContainer = styled.div``;

export const HistoryCard = () => {
  return (
    <HistoryCardWrapper>
      <Title>History</Title>
      <TimeLineContainer>
        <TimeLine />
      </TimeLineContainer>
    </HistoryCardWrapper>
  );
};
