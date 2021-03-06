import React from "react";
import styled from "styled-components";
import Table from "../components/Overview/Table";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  padding-top: 5px;
  width: 100%;
  padding-left: 30px;
`;

function Overview() {
  return (
    <Wrapper>
      <Table />
    </Wrapper>
  );
}

export default Overview;
