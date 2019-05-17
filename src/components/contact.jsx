import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  background: {
    display: "flex",
    height: "100vh",
    backgroundColor: "rgb(0, 50, 0)",
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Contact = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="Contact">
      <Typography variant="h4" color="inherit">
        Contacts
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Contact);
