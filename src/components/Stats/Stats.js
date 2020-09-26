import React from "react";
import styled from "styled-components";
import Chart1 from './chart1'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      <Headline>Stats</Headline>
      <Chart1 />
    </Wrapper>
  );
}

export default Stats;
