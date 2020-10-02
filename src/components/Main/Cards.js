import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Square = styled(Button)`
  && {
    width: 150px;
    height: 160px;
    background: ${(props) => props.theme.colors.cardBackground};
    margin-right: 25px;
    border-radius: 20px;
    box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};

    &:hover {
      background: ${(props) => props.theme.colors.accentColor};
      box-shadow: 0px 5px 10px ${(props) => props.theme.colors.shadow};
    }
  }
`;

const Text = styled.div`
  width: 150px;
  text-align: center;
  margin: 15px 0px 10px 1%;

  color: ${(props) => props.theme.colors.primaryColor};
`;

function Cards(props) {
  return (
    <div>
      <Square>
        <img src={props.icons} alt="card-icons" />
      </Square>
      <Text>{props.name}</Text>
    </div>
  );
}

export default Cards;
