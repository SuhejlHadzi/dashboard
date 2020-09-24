import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

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
`;

function User() {
  return (
    <UserWrapper>
      <Avatar
        alt="User Name"
        src="https://media.gettyimages.com/photos/rowan-atkinson-as-mr-bean-celebrates-25-years-at-buckingham-palace-on-picture-id486435094?s=2048x2048"
      />
      <Name>User Name</Name>
    </UserWrapper>
  );
}

export default User;
