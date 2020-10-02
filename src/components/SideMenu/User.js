import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import UserInfro from "./UserInfo";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: 14px;
  padding-left: 3px;
  padding-bottom: 10px;

`;

const Name = styled.p`
  margin-left: 25px;
  font-weight: 700;
  margin-right: 5px;
`;

const UserImage = styled(Avatar)`
  border: 3px solid #71ea8e;
`;

function User() {
  const HandleShow = () => {
    setshow(!show);
  };

  const [show, setshow] = useState(false);
  return (
    <UserWrapper onClick={HandleShow}>
      {show ? <UserInfro /> : ""}

      <UserImage
        alt="User Name"
        src="https://media.gettyimages.com/photos/rowan-atkinson-as-mr-bean-celebrates-25-years-at-buckingham-palace-on-picture-id486435094?s=2048x2048"
      />
      <Name>User Name</Name>
      <KeyboardArrowUpIcon fontSize="small" />
    </UserWrapper>
  );
}

export default User;
