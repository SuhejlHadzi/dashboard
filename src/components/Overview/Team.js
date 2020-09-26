import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Marques from "../Main/Assets/Marques.jpg";
import Chris from "../Main/Assets/Chris.jpg";
import Gary from "../Main/Assets/Gary.jpg";
import Petter from "../Main/Assets/Petter.jpg";
import Michael from "../Main/Assets/Michael.jpg";
import styled from "styled-components";

const TeamContainer = styled(AvatarGroup)`
  && {
    width: 0px;
    height: 40px;
    margin-left: 35px;
  }
`;

export default function Team({ max }) {
  return (
    <TeamContainer max={max}>
      <Avatar alt="Gary Vee" src={Gary} />
      <Avatar alt="Chris Prat" src={Chris} />
      <Avatar alt="Marques Brownlee" src={Marques} />
      <Avatar alt="Petter Mckinnon" src={Petter} />
      <Avatar alt="Michaerl Fisher" src={Michael} />
    </TeamContainer>
  );
}
