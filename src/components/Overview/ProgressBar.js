import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";

const Progress = styled(LinearProgress)`
  && {
    height: 10px;
    border-radius: 5px;
    background: #ccc;
    width: 60%;
  }
`;

export default function ProgressBar({ value }) {
  return (
    <div>
      <Progress variant="determinate" value={value} />
    </div>
  );
}
