import React from "react";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LoopIcon from "@material-ui/icons/Loop";

const Text = styled(Typography)`
  && {
    color: ${(props) =>
      props.time
        ? (props) => props.theme.colors.disabled
        : (props) => props.theme.colors.primaryColor};
    margin-top: 5px;
  }
`;

const Dot = styled(TimelineDot)`
  && {
    background: ${(props) => (props.blue ? "#7971EA" : "#71EA8E")};
    box-shadow: none;
    margin: 5px 10px;
    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`;

const TimelineWrapper = styled.div`
  width: 310px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  height: 380px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 235px;
    height: 370px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-top: 5px;
  padding-left: 10px;
`;

const Header = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
`;

export default function OppositeContentTimeline() {
  return (
    <TimelineWrapper>
      <CardHeader>
        <Header>Timeline</Header>
      </CardHeader>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Text time="true">09:30 am</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Dot blue="true">
              <WorkIcon />
            </Dot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Work</Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Text time="true">10:00 am</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Dot>
              <GroupIcon />
            </Dot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Meeting</Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Text time="true">12:00 am</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Dot blue="true">
              <FitnessCenterIcon />
            </Dot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Train</Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Text time="true">9:00 am</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Dot>
              <LoopIcon />
            </Dot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Repeat</Text>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </TimelineWrapper>
  );
}
