import React from "react";
import styled from "styled-components";
import Table from "./Table";
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

function Overview() {
  return (
    <Wrapper>
      <Headline>Overview</Headline>
      <Table />
    </Wrapper>
  );
}

export default Overview;