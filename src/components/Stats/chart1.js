import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  width: 600px;
  height: 410px;
  background: ${(props) => props.theme.colors.cardBackground};
  padding-top: 20px;
  border-radius: 10px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  @media (max-width: 768px) {
    width: 250px;
    height: 200px;
  }
`;

const ChartWrapper = styled(Chart)`
  width: 600px;
  height: 400px;
  @media (max-width: 768px) {
    width: 240px;
  }
`;
const state = {
  series: [
    {
      name: "Investment",
      color: "#7971EA",
      data: [31, 40, 28, 51, 109, 100],
    },
    {
      name: "Earnings",
      color: "#71EA8E",
      data: [11, 32, 45, 32, 52, 41],
    },
  ],
  options: {
    chart: {
      foreColor: "#c1c1c1",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false,
          customIcons: [],
        },
      },

      height: 350,
      type: "area",
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
    fill: {
      colors: ["#7971EA", "#71EA8E", "#9C27B0"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        opacityFrom: 0,
        opacityTo: 0.8,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

function Chart1() {
  return (
    <Wrapper>
      <ChartWrapper options={state.options} series={state.series} type="area" />
    </Wrapper>
  );
}

export default Chart1;
