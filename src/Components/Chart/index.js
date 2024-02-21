import React, { useState} from "react";
import ReactECharts from "echarts-for-react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardModel from "../CardModel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import DataPicker from "../DatePicker";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Index(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [chartData, setChartData] = useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handlechartClickOpen = () => {
    console.log("111");
    // setCardData(props);
    setOpenEdit(true);
    setChartData(props);
  };
  const handlechartEditClose = () => {
    setOpenEdit(false);
  };

  const removeChart = (id) => {
    const newdataset = props.dataState.filter(
      (value) => value.id !== props.data.id
    );

    props.setDataState(newdataset);
    handleCloseDelete();
  };

  const option = {
    xAxis: {
      type: props.data.style?.xAxis?.type,
      // boundaryGap: props.data.style?.xAxis?.boundaryGap,
      data: props.data.style?.xAxis?.data,
      // boundaryGap: false,
    },
    yAxis: {
      type: props.data.style?.yAxis?.type,
    },
    tooltip: {
      formatter: props.data.style?.tooltip?.formatter,
    },
    series: [
      {
        data: props.data.style?.series?.data,
        type: props.data.style?.series?.type,
        smooth: props.data.style?.series?.smooth,
        // areaStyle: props.data.style?.series?.areaStyle,
        // progress:{
        //   show:props.data.style?.series?.progress?.show
        // },
        // detail: {
        //   valueAnimation: props.data.style?.series?.detail?.valueAnimation,
        //   formatter: props.data.style?.series?.detail?.formatter
        // },
        showBackground: props.data.style?.series?.showBackground,
        // backgroundStyle: {
        //   color: props.data.style.backgroundStyle?.color,
        // },
      },
    ],
  };

  return (
    <Grid
      item
      xs={props.data.style.grid?.xs}
      lg={props.data.style.grid?.lg}
      md={props.data.style.grid?.md}
      sm={props.data.style.grid?.sm}
    >
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Delete chart
          <IconButton sx={{ color: "red", p: 1 }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you want delete this chart ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={removeChart}>Delete</Button>
        </DialogActions>
      </Dialog>
      <DataPicker
        btnName={<MoreVertIcon />}
        dataState={props.dataState}
        setDataState={props.setDataState}
        Add2={"Add position"}
        Index={props.index}
      />
      <ReactECharts option={option} />
      <Box justifyContent="flex-end" display={"flex"}>
        <Stack spacing={2} direction="row">
          <CardModel
            open={openEdit}
            handleClose={handlechartEditClose}
            chartData1={chartData?.data}
            dataState={props.dataState}
            setDataState={props.setDataState}
          />
          <Button variant="contained" onClick={handlechartClickOpen}>
            <EditIcon />{" "}
          </Button>
          <Button variant="contained" onClick={handleClickOpenDelete}>
            <DeleteForeverIcon />
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
