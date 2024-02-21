export const dataSet = [
  {
    id: "1",
    type: "card",
    title: "card 1 ",
    style: {
      fontSize: 15,
      borderRadius: "10px",
      topText: {
        text: "Machine card4",
        variant: "h6",
        style: {
          textAlign: "center",
          fontWeight: "560",
          color: "text.secondary",
        },
      },
      Icon: {
        text: 410,
        icon: "A",
      },
      bottomText: {
        text: "active",
        backgroundcolor: "green",
      },
      iconButton: "AttractionsIcon",
      grid: {
        xs: 6,
        lg: 3,
        md: 4,
        sm: 6,
      },
      cardbackgroundcolor: "#9575cd",
    },
  },
  {
    id: "2",
    type: "card",
    title: "card 2 ",
    style: {
      fontSize: 15,
      borderRadius: "10px",
      topText: {
        text: "Machine card4",
        variant: "h6",
        style: {
          textAlign: "center",
          fontWeight: "560",
        },
      },

      Icon: {
        text: 120,
        icon: "W",
      },
      bottomText: {
        text: "Stop",
        backgroundcolor: "red",
      },
      iconButton: "AttractionsIcon",
      grid: {
        xs: 6,
        lg: 3,
        md: 4,
        sm: 6,
      },
      cardbackgroundcolor: "#4db6ac",
    },
  },

  {
    id: "3",
    type: "card",
    title: "card 3",
    style: {
      fontSize: 15,
      borderRadius: "10px",
      topText: {
        text: "Machine card4",
        variant: "h6",
        style: {
          textAlign: "center",
          fontWeight: "560",
        },
      },
      Icon: {
        text: 300,
        icon: "V",
      },
      bottomText: {
        text: "Running",
        backgroundcolor: "yellow",
      },
      iconButton: "AutoModeIcon",
      grid: {
        xs: 6,
        lg: 3,
        md: 4,
        sm: 6,
      },
      cardbackgroundcolor: "#42a5f5",
    },
  },
  {
    id: "4",
    type: "card",
    title: "card 4",
    style: {
      fontSize: 15,
      borderRadius: "10px",
      topText: {
        text: "Machine card4",
        variant: "h6",
        style: {
          textAlign: "center",
          fontWeight: "560",
        },
      },
      Icon: {
        text: 200,
        icon: "A",
      },
      bottomText: {
        text: "Not work",
        backgroundcolor: "white",
      },
      iconButton: "AddReactionIcon",
      grid: {
        xs: 6,
        lg: 3,
        md: 4,
        sm: 6,
      },
      cardbackgroundcolor: "#ffb74d",
    },
  },
  {
    id: "5",
    type: "chart",
    style: {
      xAxis: {
        type: 'category',
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: 'value'
      },
      series: 
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ,
      grid: {
        xs: 6,
        lg: 4,
        md: 4,
        sm: 6,
      },
      
    },
  },
  {
    id: "6",
    type: "chart",
    style: {
      xAxis: {
        type: 'category',
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: 'value'
      },
      series: 
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(120, 100, 150, 0.2)'
          }
        }
      ,
      grid: {
        xs: 6,
        lg: 4,
        md: 4,
        sm: 6,
      },
      
    },
  },
  {
    id: "7",
    type: "chart",
    style: {
      xAxis: {
        type: 'category',
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: 'value'
      },
      series: 
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(60, 500, 40, 0.5)'
          }
        }
      ,
      grid: {
        xs: 6,
        lg: 4,
        md: 4,
        sm: 6,
      },
      
    },
  },
  // {
  //   id: "6",
  //   type: "chart",
  //   title: "line",
  //   style: {
  //     xAxis: {
  //       type: 'category',
  //       boundaryGap: false,
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: 
  //       {
  //         data: [820, 932, 901, 934, 1290, 1330, 1320],
  //         type: 'line',
  //         areaStyle: {}
  //       }
  //     ,

  //     grid: {
  //       xs: 6,
  //       lg: 4,
  //       md: 4,
  //       sm: 6,
  //     },
      
  //   },
  // },
  // {
  //   id: "7",
  //   type: "chart",
  //   style: {
  //     tooltip: {
  //       formatter: '{a} <br/>{b} : {c}%'
  //     },
  //     series: 
  //       {
  //         name: 'Pressure',
  //         type: 'gauge',
  //         progress: {
  //           show: true
  //         },
  //         detail: {
  //           valueAnimation: true,
  //           formatter: '{value}'
  //         },
  //         data: [
  //           {
  //             value: 50,
  //             name: 'SCORE'
  //           }
  //         ]
  //       },

  //     grid: {
  //       xs: 6,
  //       lg: 4,
  //       md: 4,
  //       sm: 6,
  //     },
  //   },
  // },
  // {
  //   id: "8",
  //   type: "chart",
  //   title: "bar",
  //   style: {
  //     areaStyle: {},
  //     showBackground: true,
  //     backgroundStyle: {
  //       color: "rgba(10, 180, 180, 0.2)",
  //     },
  //     grid: {
  //       xs: 6,
  //       lg: 4,
  //       md: 4,
  //       sm: 6,
  //     },
  //     XAxis: {
  //       Xdata: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     },
  //   },
  // },
];
