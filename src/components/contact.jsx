import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const styles = theme => ({
  background: {
    display: "flex",
    height: "100vh",
    backgroundColor: "rgb(0, 50, 0)",
    color: "white"
  },
  gridText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

const Contact = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="Contact">
      <Grid container>
        <Grid container>
          <Grid item xs={12} className={classes.gridText}>
            <Typography variant="h4" color="inherit">
              Contacts
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} className={classes.gridIcons}>
            <Typography variant="h4" color="inherit">
              Contacts
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Contact);
