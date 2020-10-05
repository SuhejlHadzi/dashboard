import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 310px;
  height: 380px;
  margin-right: 20px;
  padding-top: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 235px;
    height: 370px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  padding: 5px 30px;
`;

const HeaderText = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 30px;
  margin-top: 5px;
`;
const UserImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryColor};
`;
const UserSubtitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primaryColor};
`;

function Users() {
  const [state, setstate] = useState([
    { id: 1, title: "Marques", subtitle: "techreview" },
    { id: 2, title: "Petter", subtitle: "Photographer" },
    { id: 3, title: "Chris", subtitle: "Designer" },
    { id: 4, title: "Michael", subtitle: "Youtuber" },
    { id: 5, title: "Gary", subtitle: "Entrepreneur" },
  ]);
  return (
    <Card>
      <CardHeader>
        <HeaderText>Users</HeaderText>
      </CardHeader>
      {state.map((item) => (
        <User key={item.id}>
          <UserImage src={require(`./Assets/${item.title}.jpg`)} />
          <UserText>
            <UserTitle>
              {item.title}
              <br />
            </UserTitle>
            <UserSubtitle>{item.subtitle}</UserSubtitle>
          </UserText>
        </User>
      ))}
    </Card>
  );
}

export default Users;
