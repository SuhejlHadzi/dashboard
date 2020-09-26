import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import Team from "./Team";
import ProgressBar from "./ProgressBar";

const Container = styled(TableContainer)`
  && {
    background: ${(props) => props.theme.colors.cardBackground};
    width: 98%;
    margin-top: 20px;
    border-radius: 10px;
  }
`;
const Thead = styled(TableHead)`
  && {
    background: ${(props) => props.theme.colors.accentColor};
  }
`;

const Row = styled(TableRow)`
  && {
    &:hover {
      box-shadow: 0px 0px 10px ${(props) => props.theme.colors.hover};
    }
  }
`;

const HeaderCell = styled(TableCell)`
  && {
    border: none;
    color: #fff;
    font-family: inherit;
  }
`;

const RowCell = styled(TableCell)`
  && {
    border: none;
    color: ${(props) => props.theme.colors.primaryColor};
    text-transform: none;
    font-family: inherit;
    width: 100px;
  }
`;

function createData(name, projects, tasks, progress) {
  return { name, projects, tasks, progress };
}

const rows = [
  createData(
    "Website Building",
    <Team max="4" />,
    6.0,
    <ProgressBar value="20" />
  ),
  createData(
    "Server Maintainance",
    <Team max="1" />,
    9.0,
    <ProgressBar value="70" />
  ),
  createData("E-learning", <Team max="3" />, 16.0, <ProgressBar value="80" />),
  createData(
    "App Development",
    <Team max="5" />,
    32,
    <ProgressBar value="40" />
  ),
  createData(
    "Booking Website",
    <Team max="2" />,
    1,
    <ProgressBar value="35" />
  ),
  createData("Logo Design", <Team max="4" />, 29, <ProgressBar value="90" />),
  createData(
    "Branding For Nike",
    <Team max="3" />,
    16,
    <ProgressBar value="50" />
  ),
];

export default function BasicTable() {
  return (
    <Container>
      <Table>
        <Thead>
          <Row>
            <HeaderCell>Projects</HeaderCell>
            <HeaderCell align="center">Team</HeaderCell>
            <HeaderCell align="center">Tasks</HeaderCell>
            <HeaderCell align="center">Progress</HeaderCell>
          </Row>
        </Thead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name}>
              <RowCell component="th" scope="row">
                {row.name}
              </RowCell>
              <RowCell align="center">{row.projects}</RowCell>
              <RowCell align="center">{row.tasks}</RowCell>
              <RowCell align="center">{row.progress}</RowCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
