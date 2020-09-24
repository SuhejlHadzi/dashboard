import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Clock from "./Assets/clock.svg";
import Mission from "./Assets/mission.svg";
import Activity from "./Assets/activity.svg";
import Reminder from "./Assets/reminder.svg";
import ActivityRing from "./ActivityRing";
import Users from "./Users";
import RightContent from "./RightContent";
import Timeline from "./Timeline";
import GoogleApps from "./GoogleApps";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  padding-top: 20px;
  width: 100%;
  padding-left: 30px;
`;

const LeftUpper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: start;
  margin-top: 15px;
`;
const LeftLower = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
`;

function MainContent() {
  return (
    <Wrapper>
      <LeftUpper>
        <Cards name="My Goals" icons={Mission} />
        <Cards name="Activity" icons={Activity} />
        <Cards name="Recent" icons={Clock} />
        <Cards name="Reminders" icons={Reminder} />
        <RightContent />
      </LeftUpper>

      <LeftLower>
        <ActivityRing />
        <Users />
        <Timeline />
        <GoogleApps />
      </LeftLower>
    </Wrapper>
  );
}

export default MainContent;
