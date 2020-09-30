import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  height: 300px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  width: 500px;
  padding: 20px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
`;

const ButtonsWrapper = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 20px;
`;

const Primary = styled(Button)`
  && {
    background: ${(props) => props.theme.colors.accentColor};
    color: #fff;
    text-transform: none;
    transition: box-shadow 0.5s;
    border-radius: ${(props) => (props.rounded ? "50px" : "0")};
    width: ${(props) => (props.rounded ? "90px" : "")};
  }
`;
const Success = styled(Button)`
  && {
    background: #71ea8e;
    color: #fff;
    text-transform: none;
    margin-left: 10px;
    border-radius: ${(props) => (props.rounded ? "50px" : "0")};
    width: ${(props) => (props.rounded ? "90px" : "")};
  }
`;

const Info = styled(Button)`
  && {
    background: #51adcf;
    color: #fff;
    text-transform: none;
    margin-left: 10px;
    border-radius: ${(props) => (props.rounded ? "50px" : "0")};
    width: ${(props) => (props.rounded ? "60px" : "")};
  }
`;

const Danger = styled(Button)`
  && {
    background: #ea71a6;
    color: #fff;
    text-transform: none;
    margin-left: 10px;
    border-radius: ${(props) => (props.rounded ? "50px" : "0")};
    width: ${(props) => (props.rounded ? "80px" : "")};
  }
`;
const Warning = styled(Button)`
  && {
    background: #fca652;
    color: #fff;
    text-transform: none;
    margin-left: 10px;
    border-radius: ${(props) => (props.rounded ? "50px" : "0")};
    width: ${(props) => (props.rounded ? "90px" : "")};
  }
`;
function Buttons() {
  return (
    <Wrapper>
      <Title>Default Buttons</Title>
      <ButtonsWrapper>
        <Primary>Primary</Primary>
        <Success>Success</Success>
        <Info>Info</Info>
        <Danger>Danger</Danger>
        <Warning>Warning</Warning>
      </ButtonsWrapper>
      <Title>Rounded Buttons </Title>
      <Primary rounded>Primary</Primary>
      <Success rounded>Success</Success>
      <Info rounded>Info</Info>
      <Danger rounded>Danger</Danger>
      <Warning rounded>Warning</Warning>
    </Wrapper>
  );
}

export default Buttons;
