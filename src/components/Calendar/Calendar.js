import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  padding-top: 25px;
  width: 100%;
  padding-left: 30px;
`;

function Calendar() {
  return (
    <Wrapper>
      <h1>Calendar</h1>
    </Wrapper>
  );
}

export default Calendar;
