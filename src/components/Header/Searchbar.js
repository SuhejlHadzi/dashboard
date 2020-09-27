import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const Input = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.primaryColor};
  &:focus::placeholder {
    color: transparent;
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  border: none;
  padding: 0 6px 0 20px;
  width: 40%;
  height: 45px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primaryColor};
`;

const SearchButton = styled.button`
  && {
    background: ${(props) => props.theme.colors.accentColor};
    color: white;
    transition: background 0.3s;
    height: 35px;
    width: 40px;
    border: none;
    border-radius: 7px;
    font-size: 1px;
    &:hover {
      background: ${(props) => props.theme.colors.hover};
    }
  }
`;

function Searchbar() {
  return (
    <>
      <Form>
        <Input placeholder="Search something..."></Input>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </Form>
    </>
  );
}

export default Searchbar;
