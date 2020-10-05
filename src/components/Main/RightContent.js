import React from "react";
import styled from "styled-components";
import illustration from "./Assets/illustration.svg";

const Text = styled.h2`
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`;

const P = styled.p`
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UpperRight = styled.div`
  height: 160px;
  width: 500px;
  background: ${(props) => props.theme.colors.accentColor};
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  margin-left: 5px;
  padding: 30px;

  @media (max-width: 768px) {
    width: 151px;
  }

  
`;

const Illustration = styled.img`
  margin-top: 12px;
  @media (max-width: 768px) {
    width: 150px;
    margin-top: 72px;
    margin-left: -30px;
    object-fit:contain;
  }
`;

function RightContent() {
  return (
    <div>
      <UpperRight>
        <Text>Hi! Welcome, </Text>
        <P>
          Organize your work with your <br /> favourite dashboard{" "}
        </P>
        <Illustration src={illustration} alt="" />
      </UpperRight>
    </div>
  );
}

export default RightContent;
