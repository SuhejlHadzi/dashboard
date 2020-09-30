import React from "react";
import styled from "styled-components";
import Alerts from "../components/settings/Alerts";
import Buttons from "../components/settings/Buttons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  padding-top: 25px;
  width: 100%;
  padding-left: 30px;
`;

function Settings() {
  return (
    <Wrapper>
      <Alerts />
      <Buttons />
    </Wrapper>
  );
}

export default Settings;
