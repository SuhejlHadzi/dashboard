import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Card = styled.div`
  width: 310px;
  height: 380px;
  margin-right: 20px;
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-top: 5px;
`;

const HeaderText = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const ChartWrapper = styled(Chart)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const CardText = styled.div`
  font-size: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.primaryColor};
  margin-top: 35px;
`;

const StatDot = styled.span`
  height: 10px;
  margin: 0 5px;
  width: 10px;
  background: ${(props) =>
    (props.green && "#71EA8E") ||
    (props.blue && "#7971EA") ||
    (props.red && "#EA71A6")};
  border-radius: 50%;
`;
const state = {
  series: [30, 40, 50],
  options: {
    plotOptions: {
      radialBar: {
        hollow: { size: "28%" },
        dataLabels: {
          name: { show: false },
          value: { show: true, color: "#7971EA", offsetY: 5 },
        },
        track: {
          background: "#efefef",
        },
      },
    },
    stroke: { lineCap: "round" },
    colors: ["#71EA8E", "#7971EA", "#EA71A6"],
  },
};

function ActivityRing() {
  return (
    <Card>
      <CardHeader>
        <HeaderText>General Stats</HeaderText>
      </CardHeader>
      <ChartWrapper
        options={state.options}
        series={state.series}
        type="radialBar"
      />
      <CardText>
        <StatDot green="true" /> Work <StatDot blue="true" /> Learn
        <StatDot red="true" /> Research
      </CardText>
    </Card>
  );
}

export default ActivityRing;
