import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {
  TextField,
  Button,
  FormLabel,
  Grid,
  FormControl,
  Select,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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

export default function CustomizedDialogs(props) {
  const {
    data,
    setDataState,
    dataState,
    open,
    handleClose,
    carddata1,
    chartData1,
    Add1,
    Add2,
    Index,
  } = props;

  const [formValues, setFormValues] = useState({});

  console.log("ccc", data);

  const handleInputChange = (e, isNumber) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: isNumber ? Number(value) : value,
    });
  };

  useEffect(() => {
    if (carddata1) {
      const { type, title, style } = carddata1;

      setFormValues((c) => ({
        ...c,
        type,
        title,
        fontSize: style.fontSize,
        borderRadius: style.borderRadius,
        cardbackgroundcolor: style.cardbackgroundcolor,
        TopText: style.topText.text,
        iconButton: style.iconButton,
        IconText: style.Icon.text,
        Iconicon: style.Icon.icon,
        xs: style.grid.xs,
        lg: style.grid.lg,
        md: style.grid.md,
        sm: style.grid.sm,
      }));
    }
  }, [carddata1]);

  useEffect(() => {
    console.log("chart", chartData1);
    if (chartData1) {
      const { type, title, style } = chartData1;

      setFormValues((c) => ({
        ...c,
        type,
        charttype: title,
        XAxisType: style.xAxis.type,
        charttype: style.series.type,
        SeriesSmooth: style.series.smooth,
        showBackground: style.series.showBackground,
        xs: style.grid.xs,
        lg: style.grid.lg,
        md: style.grid.md,
        sm: style.grid.sm,
      }));
    }
  }, [chartData1]);

  const handleSubmit = (e, isNumber) => {
    e.preventDefault();
    if (carddata1) {
      const updatedCardData = dataState.map((e) => {
        if (e.id === carddata1.id) {
          return {
            ...e,
            id: carddata1.id,
            type: formValues.type,
            title: formValues.title,
            style: {
              fontSize: formValues.fontSize,
              borderRadius: formValues.borderRadius,
              topText: {
                text: formValues.TopText,
              },
              iconButton: formValues.iconButton,
              Icon: {
                text: formValues.IconText,
                icon: formValues.Iconicon,
              },
              bottomText: {
                text: "Running",
                backgroundcolor: "yellow",
              },
              grid: {
                xs: formValues.xs,
                lg: formValues.lg,
                md: formValues.md,
                sm: formValues.sm,
              },
              cardbackgroundcolor: formValues.cardbackgroundcolor,
            },
          };
        } else {
          return e;
        }
      });
      setDataState(updatedCardData);
    } else if (chartData1) {
      console.log("amma", dataState);
      const updatedChartData = dataState.map((e) => {
        if (e.id === chartData1.id) {
          return {
            ...e,
            id: chartData1.id,
            type: formValues.type,
            title: formValues.charttype,
            style: {
              xAxis: {
                type: formValues.XAxisType,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
              yAxis: {
                type: "value",
              },
              series: {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: formValues.charttype,
                smooth: formValues.SeriesSmooth,
                showBackground: formValues.showBackground,
                backgroundStyle: {
                  color: "rgba(180, 180, 180, 0.2)",
                },
              },

              grid: {
                xs: formValues.xs,
                lg: formValues.lg,
                md: formValues.md,
                sm: formValues.sm,
              },
            },
          };
        } else {
          return e;
        }
      });
      setDataState(updatedChartData);
    } else if (Add1 && formValues.type === "card") {
      setDataState((obj) => [
        ...obj,
        {
          id: Math.random() * 100,
          type: formValues.type,
          title: formValues.title,
          style: {
            fontSize: formValues.fontSize,
            borderRadius: formValues.borderRadius,
            topText: {
              text: formValues.TopText,
            },
            iconButton: formValues.iconButton,
            Icon: {
              text: formValues.IconText,
              icon: formValues.Iconicon,
            },
            bottomText: {
              text: "Running",
              backgroundcolor: "yellow",
            },
            grid: {
              xs: formValues.xs,
              lg: formValues.lg,
              md: formValues.md,
              sm: formValues.sm,
            },
            cardbackgroundcolor: formValues.cardbackgroundcolor,
          },
        },
      ]);
    } else if (Add1 && formValues.type === "chart") {
      setDataState((obj) => [
        ...obj,
        {
          id: Math.random() * 100,
          type: formValues.type,
          title: formValues.charttype,
          style: {
            xAxis: {
              type: formValues.XAxisType,
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
              type: "value",
            },
            series: {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: formValues.charttype,
              smooth: formValues.SeriesSmooth,
              showBackground: formValues.showBackground,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
              },
            },

            grid: {
              xs: formValues.xs,
              lg: formValues.lg,
              md: formValues.md,
              sm: formValues.sm,
            },
          },
        },
      ]);
    } else if (formValues.position === "Left" && formValues.type === "card") {
      dataState.splice(Index, 0, {
        id: Math.random() * 100,
        type: formValues.type,
        title: formValues.title,
        style: {
          fontSize: formValues.fontSize,
          borderRadius: formValues.borderRadius,
          topText: {
            text: formValues.TopText,
          },
          iconButton: formValues.iconButton,
          Icon: {
            text: formValues.IconText,
            icon: formValues.Iconicon,
          },
          bottomText: {
            text: "Running",
            backgroundcolor: "yellow",
          },
          grid: {
            xs: formValues.xs,
            lg: formValues.lg,
            md: formValues.md,
            sm: formValues.sm,
          },
          cardbackgroundcolor: formValues.cardbackgroundcolor,
        },
      });
      setDataState([...dataState, dataState]);
    } else if (formValues.position === "Right" && formValues.type === "card") {
      dataState.splice(Index + 1, 0, {
        id: Math.random() * 100,
        type: formValues.type,
        title: formValues.title,
        style: {
          fontSize: formValues.fontSize,
          borderRadius: formValues.borderRadius,
          topText: {
            text: formValues.TopText,
          },
          iconButton: formValues.iconButton,
          Icon: {
            text: formValues.IconText,
            icon: formValues.Iconicon,
          },
          bottomText: {
            text: "Running",
            backgroundcolor: "yellow",
          },
          grid: {
            xs: formValues.xs,
            lg: formValues.lg,
            md: formValues.md,
            sm: formValues.sm,
          },
          cardbackgroundcolor: formValues.cardbackgroundcolor,
        },
      });
      setDataState([...dataState, dataState]);
    } else if (formValues.position === "Left" && formValues.type === "chart") {
      dataState.splice(Index, 0, {
        id: Math.random() * 100,
        type: formValues.type,
        title: formValues.charttype,
        style: {
          xAxis: {
            type: formValues.XAxisType,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: formValues.charttype,
            smooth: formValues.SeriesSmooth,
            showBackground: formValues.showBackground,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },

          grid: {
            xs: formValues.xs,
            lg: formValues.lg,
            md: formValues.md,
            sm: formValues.sm,
          },
        },
      });
      setDataState([...dataState, dataState]);
    } else if (formValues.position === "Right" && formValues.type === "chart") {
      dataState.splice(Index + 1, 0, {
        id: Math.random() * 100,
        type: formValues.type,
        title: formValues.charttype,
        style: {
          xAxis: {
            type: formValues.XAxisType,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: formValues.charttype,
            smooth: formValues.SeriesSmooth,
            showBackground: formValues.showBackground,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },

          grid: {
            xs: formValues.xs,
            lg: formValues.lg,
            md: formValues.md,
            sm: formValues.sm,
          },
        },
      });
      setDataState([...dataState, dataState]);
    }

    setFormValues({});
  };

  // console.log(formValues, "ttt");
  // console.log()

  return (
    <div>
      {console.log("ddd")}

      <BootstrapDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {carddata1 ? "Edit card" : "Add Widget"}
        </BootstrapDialogTitle>

        <Box
          component="form"
          fullWidth
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <DialogContent dividers>
            <Grid container spacing={2} alignItems="flex-end">
              {/* <Box display={"flex"}> */}

              {Add2 ? (
                <Grid item lg={3} xs={12}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <FormLabel>Widget Position</FormLabel>
                    <Select
                      fullWidth
                      id="position"
                      name="position"
                      variant="outlined"
                      size="small"
                      type="text"
                      value={formValues.position || ""}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <MenuItem value={"Left"}>Left</MenuItem>
                      <MenuItem value={"Right"}>Right</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              ) : null}

              <Grid item lg={3} xs={12}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <FormLabel>Type Widget</FormLabel>
                  <Select
                    fullWidth
                    id="type"
                    name="type"
                    variant="outlined"
                    size="small"
                    type="text"
                    value={formValues.type}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <MenuItem value={"card"}>card</MenuItem>
                    <MenuItem value={"chart"}>chart</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <FormLabel>xs</FormLabel>
                    <Select
                      id="xs"
                      name="xs"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.xs}
                      onChange={handleInputChange}
                    >
                      <MenuItem value={1}>1 </MenuItem>
                      <MenuItem value={2}>2 </MenuItem>
                      <MenuItem value={3}>3 </MenuItem>
                      <MenuItem value={4}>4 </MenuItem>
                      <MenuItem value={5}>5 </MenuItem>
                      <MenuItem value={6}>6 </MenuItem>
                      <MenuItem value={7}>7 </MenuItem>
                      <MenuItem value={8}>8 </MenuItem>
                      <MenuItem value={9}>9 </MenuItem>
                      <MenuItem value={10}>10 </MenuItem>
                      <MenuItem value={11}>11 </MenuItem>
                      <MenuItem value={12}>12 </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <FormLabel>lg</FormLabel>
                    <Select
                      id="lg"
                      name="lg"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.lg}
                      onChange={handleInputChange}
                    >
                      <MenuItem value={1}>1 </MenuItem>
                      <MenuItem value={2}>2 </MenuItem>
                      <MenuItem value={3}>3 </MenuItem>
                      <MenuItem value={4}>4 </MenuItem>
                      <MenuItem value={5}>5 </MenuItem>
                      <MenuItem value={6}>6 </MenuItem>
                      <MenuItem value={7}>7 </MenuItem>
                      <MenuItem value={8}>8 </MenuItem>
                      <MenuItem value={9}>9 </MenuItem>
                      <MenuItem value={10}>10 </MenuItem>
                      <MenuItem value={11}>11 </MenuItem>
                      <MenuItem value={12}>12 </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <FormLabel>md</FormLabel>
                    <Select
                      id="md"
                      name="md"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.md}
                      onChange={handleInputChange}
                    >
                      <MenuItem value={1}>1 </MenuItem>
                      <MenuItem value={2}>2 </MenuItem>
                      <MenuItem value={3}>3 </MenuItem>
                      <MenuItem value={4}>4 </MenuItem>
                      <MenuItem value={5}>5 </MenuItem>
                      <MenuItem value={6}>6 </MenuItem>
                      <MenuItem value={7}>7 </MenuItem>
                      <MenuItem value={8}>8 </MenuItem>
                      <MenuItem value={9}>9 </MenuItem>
                      <MenuItem value={10}>10 </MenuItem>
                      <MenuItem value={11}>11 </MenuItem>
                      <MenuItem value={12}>12 </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <FormLabel>sm</FormLabel>
                    <Select
                      id="sm"
                      name="sm"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.sm}
                      onChange={handleInputChange}
                    >
                      <MenuItem value={1}>1 </MenuItem>
                      <MenuItem value={2}>2 </MenuItem>
                      <MenuItem value={3}>3 </MenuItem>
                      <MenuItem value={4}>4 </MenuItem>
                      <MenuItem value={5}>5 </MenuItem>
                      <MenuItem value={6}>6 </MenuItem>
                      <MenuItem value={7}>7 </MenuItem>
                      <MenuItem value={8}>8 </MenuItem>
                      <MenuItem value={9}>9 </MenuItem>
                      <MenuItem value={10}>10 </MenuItem>
                      <MenuItem value={11}>11 </MenuItem>
                      <MenuItem value={12}>12 </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              {/* // chart and card differentition  */}

              {formValues.type === "chart" ? (
                <>
                  <Grid item lg={4} xs={12}>
                    <FormControl variant="outlined" size="small" fullWidth>
                      <FormLabel>Chart Type </FormLabel>
                      <Select
                        fullWidth
                        id="charttype"
                        name="charttype"
                        variant="outlined"
                        type="text"
                        size="small"
                        value={formValues.charttype}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <MenuItem value={"line"}>line</MenuItem>
                        <MenuItem value={"bar"}>bar</MenuItem>
                        <MenuItem value={"gauge"}>gauge</MenuItem>
                        <MenuItem value={"pie"}>pie</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <FormLabel>XAxis-type</FormLabel>
                    <TextField
                      id="XAxisType"
                      name="XAxisType"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.XAxisType}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  {formValues.charttype === "line" ? (
                    <Grid item md={4} xs={12}>
                      <FormLabel>SeriesSmooth</FormLabel>
                      <TextField
                        id="SeriesSmooth"
                        name="SeriesSmooth"
                        size="small"
                        variant="outlined"
                        type="text"
                        value={formValues.SeriesSmooth}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  ) : (
                    <Grid item md={4} xs={12}>
                      <FormLabel>showBackground</FormLabel>
                      <TextField
                        id="showBackground"
                        name="showBackground"
                        size="small"
                        variant="outlined"
                        type="text"
                        value={formValues.showBackground}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  )}
                </>
              ) : (
                <>
                  <Grid item md={4} xs={12}>
                    <FormLabel>Cardtitle</FormLabel>
                    <TextField
                      fullWidth
                      id="title"
                      name="title"
                      size="small"
                      // label="title"
                      variant="outlined"
                      value={formValues.title}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>borderRadius</FormLabel>
                    <TextField
                      id="borderRadius"
                      name="borderRadius"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.borderRadius}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Box>
                      <FormLabel>fontSize</FormLabel>
                      <TextField
                        id="fontSize"
                        name="fontSize"
                        size="small"
                        variant="outlined"
                        type="text"
                        value={formValues.fontSize}
                        onChange={handleInputChange}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>cardbackgroundcolor</FormLabel>
                    <TextField
                      id="cardbackgroundcolor"
                      name="cardbackgroundcolor"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.cardbackgroundcolor}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>TopText</FormLabel>
                    <TextField
                      id="TopText"
                      name="TopText"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.TopText}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <FormLabel>IconText</FormLabel>
                    <TextField
                      id="IconText"
                      name="IconText"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.IconText}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <FormLabel>Iconicon</FormLabel>
                    <TextField
                      id="Iconicon"
                      name="Iconicon"
                      size="small"
                      variant="outlined"
                      type="text"
                      value={formValues.Iconicon}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Box>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <FormLabel>iconButton</FormLabel>
                        <Select
                          fullWidth
                          id="iconButton"
                          name="iconButton"
                          variant="outlined"
                          size="small"
                          type="text"
                          value={formValues.iconButton}
                          onChange={(e) => handleInputChange(e)}
                        >
                          <MenuItem value={"AttractionsIcon"}>
                            AttractionsIcon{" "}
                          </MenuItem>
                          <MenuItem value={"AddToDriveIcon"}>
                            AddToDriveIcon{" "}
                          </MenuItem>
                          <MenuItem value={"AutoModeIcon"}>
                            AutoModeIcon{" "}
                          </MenuItem>
                          <MenuItem value={"AddReactionIcon"}>
                            AddReactionIcon{" "}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                backgroundColor: "blue",
              }}
              onClick={handleClose}
            >
              Submit
            </Button>
          </DialogActions>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
