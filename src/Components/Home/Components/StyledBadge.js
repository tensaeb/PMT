import { Badge, withStyles } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 102,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default StyledBadge;
