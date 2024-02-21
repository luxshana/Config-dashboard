import React, { useState } from "react";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import {Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import CardModel from "../CardModel";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function App({ setDataState,dataState,data,btnName,Add1,Add2,Index }) {
  const [singleCard, setSingleCard] = useState(true);
  const [openCard, setOpenCard] = useState(false);
  // const [dateState, setDateState] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => setDateState(new Date()), 30000);
  // }, []);

  const handleClickOpenCard = () => {
    setOpenCard(true);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
  };

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} p={2}>
        {/* <Box display={"flex"} sx={{}}>
          <CalendarMonthIcon />{" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          <AccessTimeFilledIcon />
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Box> */}
        <CardModel
          setOpenCard={setOpenCard}
          open={openCard}
          handleClose={handleCloseCard}
          singleCard={singleCard}
          setDataState={setDataState}
          dataState={dataState}
          Add1={Add1}
          Add2={Add2}
          Index={Index}
          setSingleCard={setSingleCard}
          
          // AddWidgetData={data}
        />

        <Button variant="contained" onClick={handleClickOpenCard}>
          {btnName}
        </Button>
      </Box>
    </Box>
  );
}

export default App;
