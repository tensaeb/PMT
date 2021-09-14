import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PendingLists from "../../Components/Kanban/PendingLists";

import { getTasks } from "../../actions/tasks";

import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

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

  card: {
    marginBottom: 22,
  },
}));

const KanbanPage = ({ getTasks, tasks }) => {
  const classes = useStyles();

  let columnsFromBack = [
    {
      name: "Pending",
      items: tasks,
    },
    {
      name: "Doing",
      items: [],
    },
    {
      name: "Completed",
      items: [],
    },
    {
      name: "Submitted",
      items: [],
    },
    {
      name: "Rejected",
      items: [],
    },
  ];

  const [columns, setColumns] = useState(columnsFromBack);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // console.log(columns);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Grid container spacing={2} width={2}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div key={columnId}>
                <PendingLists
                  columnId={columnId}
                  column={column}
                  index={index}
                />
              </div>
            );
          })}
        </Grid>
      </DragDropContext>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.task,
  };
};

export default connect(mapStateToProps, { getTasks })(KanbanPage);
