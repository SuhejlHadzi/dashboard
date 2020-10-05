import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Wrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 600px;
  height: 410px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  @media (max-width: 768px) {
    width: 250px;
    height: 200px;
  }
`;

const ChartWrapper = styled(Chart)`
  width: 600px;
  height: 200px;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const state = {
  series: [
    {
      name: "Income",
      data: [2.3, 9, 4.0, 10.1, 4.0, 3.6],
    },
  ],
  options: {
    chart: {
      foreColor: "#c1c1c1",
      height: 350,
      type: "bar",
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    fill: {
      colors: ["#7971EA", "#71EA8E", "#9C27B0"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        colorFrom: "#7971EA",
        colorTo: "#71EA8E",
        stops: [0, 100],
        opacityFrom: 1,
        opacityTo: 1,
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#ccc"],
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  },
};

function Chart2() {
  return (
    <Wrapper>
      <ChartWrapper options={state.options} series={state.series} type="bar" />
    </Wrapper>
  );
}

export default Chart2;
