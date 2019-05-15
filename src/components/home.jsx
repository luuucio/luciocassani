import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    // backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",

    _height: "50vh"
  },
  text: {
    flex: 1,
    verticalAlign: "top",
    paddingTop: "50vh",
    textAlign: "center"
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography
            variant="h3"
            color="inherit"
            className={classes.text}
            align="center"
          >
            Home
          </Typography>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={6}>
            <div className={classes.root} />
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
