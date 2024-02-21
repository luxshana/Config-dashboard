import React, { useState} from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CardModel from "../CardModel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DatePicker from "../DatePicker";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Index(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [cardData, setCardData] = useState(null);

  const handleClickDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handleClickDeletClose = () => {
    setOpenDelete(false);
  };

  const handleEditClickOpen = () => {
    console.log("111");
    setCardData(props);
    setOpenEdit(true);
  };
  const handleClickEditClose = () => {
    setOpenEdit(false);
    // setCardData(null);
  };
  // const handleClickPositionCard = () => {
  //   setOpenPosition(true);
  // };

  // const handleClosePositionCard = () => {
  //   setOpenPosition(false);
  // };

  const project = () => {
    switch (props.data.style?.iconButton) {
      case "AttractionsIcon":
        return <AttractionsIcon />;
      case "AddToDriveIcon":
        return <AddToDriveIcon />;
      case "AutoModeIcon":
        return <AutoModeIcon />;
      case "AddReactionIcon":
        return <AddReactionIcon />;

      default:
        return <h1>No IconButton</h1>;
    }
  };

  const removeCard = (id) => {
    const newdataset = props.dataState.filter(
      (value) => value.id !== props.data.id
    );

    props.setDataState(newdataset);
    handleClickDeletClose();
  };

  console.log(cardData, "ee");
  return (
    <Grid
      item
      xs={props.data.style?.grid?.xs}
      lg={props.data.style?.grid?.lg}
      md={props.data.style?.grid?.md}
      sm={props.data.style?.grid?.sm}
      variant="outlined"
    >
      {/* <CardModel /> */}

      <Dialog
        open={openDelete}
        onClose={handleClickDeletClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Delete Card
          <IconButton sx={{ color: "red", p: 1 }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this card?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDeletClose}>cancel</Button>
          <Button onClick={removeCard}>Delete</Button>
        </DialogActions>
      </Dialog>
      <CardContent
        sx={{
          backgroundColor: props.data.style?.cardbackgroundcolor,
          borderRadius: props.data.style?.borderRadius,
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5" component="div">
            {props.data.title}
          </Typography>
          {/* <IconButton aria-label="settings">
            <MoreVertIcon onClick={() => setOpenEdit(true)
           
            } />
          </IconButton> */}
          <DatePicker
            btnName={<MoreVertIcon />}
            Add2={"Add position"}
            setDataState={props.setDataState}
            Index={props.index}
            dataState={props.dataState}
          />
          {/* {console.log("index",props.Index)} */}
        </Box>

        <Typography
          sx={{ fontSize: props.data.style?.fontSize }}
          color="text.secondary"
          gutterBottom
        >
          {props.data.dataSource}
        </Typography>
        {/* <Box sx={{ alignItems: "flex-end" }}>
         
        </Box> */}

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textAlign: "center",
            fontWeight: "560",
          }}
        >
          {props.data.style?.topText?.text}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
          <IconButton>
            {project()} {props.data.style?.Icon?.text}
            {props.data.style?.Icon?.icon}
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                p: 1,
                // width: 50,
                // height: 30,
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: props.data.style?.bottomText?.backgroundcolor,
              }}
            >
              {props.data.style?.bottomText?.text}
            </Paper>
          </Box>
        </Box>
        <Typography>
          <Box justifyContent="flex-end" display={"flex"}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleClickDeleteOpen}>
                Delete
              </Button>
              <CardModel
                carddata1={cardData?.data}
                open={openEdit}
                // open1={openPosition}
                handleClose={handleClickEditClose}
                // handleClose1={handleClosePositionCard}
                dataState={props.dataState}
                setDataState={props.setDataState}
                data={props.data}
              />
              <Button variant="contained" onClick={handleEditClickOpen}>
                Edit
              </Button>
            </Stack>
          </Box>
        </Typography>
      </CardContent>
    </Grid>
  );
}
