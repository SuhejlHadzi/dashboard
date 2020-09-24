import React from "react";
import styled from "styled-components";
import drive from "./Assets/drive.svg";
import docs from "./Assets/docs.svg";
import sheets from "./Assets/sheets.svg";
import LinearProgress from "@material-ui/core/LinearProgress";

const Wrapper = styled.div`
  width: 220px;
  height: 390px;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.cardBackground};
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
`;

const Header = styled.p`
  color: ${(props) => props.theme.colors.primaryColor};
  padding: 10px;
`;

const Icons = styled.img`
  width: 30px;
`;

const Progress = styled(LinearProgress)`
  margin: 5px;
  width: 70px;
  background: #ccc;
`;

function GoogleApps() {
  return (
    <Wrapper>
      <Card>
        <Icons src={drive} alt="" />
        <Header>Drive</Header>
        <Progress variant="determinate" value={50} />
      </Card>
      <Card>
        <Icons src={docs} alt="" />
        <Header>Docs</Header>
        <Progress variant="determinate" value={20} />
      </Card>
      <Card>
        <Icons src={sheets} alt="" />
        <Header>Sheet</Header>
        <Progress variant="determinate" value={70} />
      </Card>
    </Wrapper>
  );
}

export default GoogleApps;
