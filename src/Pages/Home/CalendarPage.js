import React, { useState } from "react";

import { Paper, makeStyles } from "@material-ui/core/";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appoint } from "../../Components/appoint";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    padding: "68px 0px 0px 20px",
  },
}));

const CalendarPage = () => {
  const classes = useStyles();
  const [data, setData] = useState(appoint);
  const [currentViewName, setCurrentViewName] = useState("month");

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            defaultCurrentDate="2018-07-25"
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
          <MonthView name="month" />
          <DayView />

          <Toolbar />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    </main>
  );
};

export default CalendarPage;
