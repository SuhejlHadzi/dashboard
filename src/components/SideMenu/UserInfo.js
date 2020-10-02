import React from "react";
import styled, { keyframes } from "styled-components";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const rotate = keyframes`
  from {
    height: 0%;
    opacity:0;
  }

  to {
    height: 80px;
    opacity: 1;
  }
`;

const InfoWrapper = styled.div`
  width: 120px;
  height: 80px;
  bottom: 105px;
  border-radius: 10px;
  flex-direction: column;
  left: 67px;
  margin: 0 auto;
  position: fixed;
  background: ${(props) => props.theme.colors.accentColor};
  box-shadow: 0px 5px 10px ${(props) => props.theme.colors.shadow};
  animation: ${rotate} 0.3s;
  color: #fff;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(100, 70, 234, 0.3);
  }
`;
const Text = styled.h4`
  color: #fff;
  margin-left: 8px;
`;
export default function UserInfo() {
  return (
    <InfoWrapper>
      <TextWrapper>
        <AccountCircleOutlinedIcon fontSize="small" /> <Text>Account</Text>
      </TextWrapper>
      <TextWrapper>
        <ExitToAppOutlinedIcon fontSize="small" /> <Text>Sign Out</Text>
      </TextWrapper>
    </InfoWrapper>
  );
}
