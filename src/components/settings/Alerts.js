import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const Wrapper = styled.div`
  height: 300px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  width: 500px;
  padding: 20px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  margin-bottom: 30px;
  margin-right: 20px;
`;

const AlertsWrapper = styled.div`
  margin-top: 25px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryColor};
  height: 40px;
  width: 460px;
  margin-top: 10px;
  padding: 0 15px;

  background: ${(props) =>
    (props.default && "RGBA(121,113,234,0.3)") ||
    (props.success && "RGBA(113,234,142,0.3)") ||
    (props.danger && "RGBA(255,65,77,0.3)") ||
    (props.warning && "RGBA(255,211,29,0.3)")};
  border-radius: 5px;
`;

const Text = styled.p`
  margin-left: 10px;
`;

export default function Alerts() {
  return (
    <Wrapper>
      <Title>Dashboard Alerts </Title>
      <AlertsWrapper>
        <Alert default>
          <EmailOutlinedIcon fontSize="small" />
          <Text>This is default message</Text>
        </Alert>
        <Alert success>
          <CheckIcon fontSize="small" />
          <Text>This is success message</Text>
        </Alert>
        <Alert danger>
          <ErrorOutlineIcon fontSize="small" />
          <Text>This is danger message!</Text>
        </Alert>
        <Alert warning>
          <ReportProblemOutlinedIcon fontSize="small" />
          <Text>This is warning message!</Text>
        </Alert>
      </AlertsWrapper>
    </Wrapper>
  );
}
