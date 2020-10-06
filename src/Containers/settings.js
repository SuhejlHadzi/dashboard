import React from "react";
import styled from "styled-components";
import Alerts from "../components/settings/Alerts";
import Buttons from "../components/settings/Buttons";
import Form from "../components/settings/Form";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  @media (max-width: 768px) {
    justify-content: center;
  }
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
      <Form />
    </Wrapper>
  );
}

export default Settings;
