import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const Wrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 396px;
  height: 200px;
  margin-right: 10px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: -5px 10px 10px ${(props) => props.theme.colors.shadow};
  display: flex;
  justify-content: center;
`;

const ChartHeader = styled.h1`
  color: ${(props) => props.theme.colors.accentColor};
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const ChartWrapper = styled(Chart)``;

const state = {
  series: [
    {
      color: "#7971EA",
      data: [40, 20, 60, 51, 109, 100],
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
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: [],
        },
      },

      height: 100,
      type: "line",
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    fill: {
      colors: ["#7971EA", "#71EA8E", "#9C27B0"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        opacityFrom: 0,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
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
    grid: {
      show: false,
      borderColor: "#fff",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
        annotations: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0,
      },
      column: {
        colors: undefined,
        opacity: 0,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
};

function InfoStats({ value, name }) {
  return (
    <Wrapper>
      <div>
        <ChartHeader>{value}</ChartHeader>
        <Text>{name}</Text>
      </div>
      <ChartWrapper
        options={state.options}
        series={state.series}
        type="line"
        width="250"
      />
    </Wrapper>
  );
}

export default InfoStats;
