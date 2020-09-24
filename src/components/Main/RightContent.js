import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  color: white;
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
  align-items: center;
  margin-left: 5px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 320px;
  }

  &::after {
    content: " ";
    width: 20%;
    margin-top: 130px;
    filter: blur(1.5rem);
    z-index: -1;
    position: absolute;
    height: 15px;
    background: ${(props) => props.theme.colors.accentColor};
  }
`;

function RightContent() {
  return (
    <div>
      <UpperRight>
        <Text>Hi! Welcome </Text>
      </UpperRight>
    </div>
  );
}

export default RightContent;
