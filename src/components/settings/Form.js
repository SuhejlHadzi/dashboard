import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 230px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  width: 300px;
  height: 300px;
  padding: 20px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const ElementWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  && {
    color: #fff;
    text-transform: none;
    transition: box-shadow 0.5s;
    border-radius: ${(props) => (props.rounded ? "50px" : "5px")};
    width: 185px;
    margin-top: 15px;
    background: ${(props) => props.theme.colors.accentColor};
    border: none;
    transition: background 0.3s;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0px 5px 10px ${(props) => props.theme.colors.shadow};

      color: #fff;
    }
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 10px;
  margin-top: -10px;
`;

const TextInput = styled(TextField)`
  && {
    label {
      color: ${(props) => props.theme.colors.primaryColor};
    }
    .MuiInput-underline {
      color: ${(props) => props.theme.colors.primaryColor};
    }
    .MuiInput-underline:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.accentColor};
    }
    /* hover (double-ampersand needed for specificity reasons. */
    && .MuiInput-underline:hover:before {
      border-bottom: 1px solid ${(props) => props.theme.colors.accentColor};
    }
    /* focused */
    .MuiInput-underline:after {
      border-bottom: 1px solid ${(props) => props.theme.colors.primaryColor};
    }
  }
`;

export default function BasicTextFields() {
  return (
    <Wrapper>
      <Title>Sign In</Title>
      <form noValidate autoComplete="off">
        <ElementWrapper>
          <TextInput label="Username" size="small" />
        </ElementWrapper>
        <ElementWrapper>
          <TextInput label="Password" size="small" type="password" />
        </ElementWrapper>
        <ElementWrapper>
          <SubmitButton variant="outlined" color="primary">
            Submit
          </SubmitButton>
        </ElementWrapper>
      </form>
    </Wrapper>
  );
}
