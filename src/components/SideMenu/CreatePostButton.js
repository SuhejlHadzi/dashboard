import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";

const PostButton = styled(Button)`
  && {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    align-items: center;
    text-transform: none;
    width: 210px;
    padding: 5px 10px 5px 0;
    height: 45px;
    background: ${(props) => props.theme.colors.cardBackground};
    border: none;
    border-radius: 100px;
    color: ${(props) => props.theme.colors.accentColor};
    box-shadow: 0px 5px 10px ${(props) => props.theme.colors.shadow};
    transition: background 0.5s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.accentColor};
    }
  }
`;
function CreatePostButton() {
  return (
    <div>
      <PostButton>
        <AddCircleIcon /> Create post
      </PostButton>
    </div>
  );
}

export default CreatePostButton;
