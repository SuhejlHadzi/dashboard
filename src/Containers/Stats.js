import React from "react";
import styled from "styled-components";
import Chart1 from "../components/Stats/chart1";
import Chart2 from "../components/Stats/chart2";
import InfoStats from "../components/Stats/InfoStats";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  align-content: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
  padding-top: 5px;
  width: 100%;
  padding-left: 30px;
`;

function Stats() {
  return (
    <Wrapper>
      <Chart1 />
      <Chart2 />
      <InfoStats value="200$" name="Total profit" />
      <InfoStats value="90%" name="Finished" />
      <InfoStats value="45+" name="Deals Done" />
    </Wrapper>
  );
}

export default Stats;
