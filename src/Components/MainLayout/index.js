import React, { useState} from "react";
import { dataSet } from "../JsonData";
import SmallCard from "../SmallCard";
import Grid from "@mui/material/Grid";
import Chart from "../Chart";
import DatePicker from "../DatePicker";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
export default function BasicCard() {
  const [dataState, setDataState] = useState(dataSet);
  const renderWidgets = (data, index) => {
    if (data.type === "card") {
      // console.log("index",index)
      return (
        <SmallCard
          data={data}
          index={index}
          setDataState={setDataState}
          dataState={dataState}
        />
      );
    } else if (data.type === "chart") {
      return (
        <Chart
          data={data}
          index={index}
          setDataState={setDataState}
          dataState={dataState}
        />
      );
    }
  };

  return (
    <div>
      <Box sx={{ alignItems: "center" }}>
        <DatePicker
          setDataState={setDataState}
          btnName={"Add widget"}
          Add1={"Add card"}
        />
      </Box>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Grid container spacing={1}>
          {dataState.map((data, index) => renderWidgets(data, index))}
        </Grid>
      </Paper>
    </div>
  );
}
