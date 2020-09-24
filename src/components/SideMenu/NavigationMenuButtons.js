import React from "react";
import styled from "styled-components";

const ButtonWrappr = styled.div`
  width: 215px;
  height: 40px;
  margin: 1px 0 0 10px;
  font-size: 14px;
  flex-direction: row;
  display: flex;
  justify-content: start;
  align-content: center;
  border-radius: 50px;
`;
const Margin = styled.div`
  margin: 10px 15px;
`;

function NavigationMenuButtons(props) {
  return (
    <div>
      <ButtonWrappr>
        <Margin> {props.icon} </Margin>
        <Margin> {props.name}</Margin>
      </ButtonWrappr>
    </div>
  );
}

export default NavigationMenuButtons;
