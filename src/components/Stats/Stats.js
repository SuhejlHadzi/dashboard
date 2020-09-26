import React from "react";
import styled from "styled-components";
import Chart1 from "./chart1";
import Chart2 from "./chart2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: center;
  padding-top: 25px;
  width: 100%;
  padding-left: 30px;
`;

const Headline = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
`;

function Stats() {
  return (
    <Wrapper>
      <Chart1 />
      <Chart2 />
    </Wrapper>
  );
}

export default Stats;
