import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Image from "../resources/mouse.jpg";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  background: {
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  },
  headline: {
    position: "absolute",
    top: "70%",
    width: "100%",
    left: 0,
    color: "white",
    textAlign: "center"
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.background}>
      <Typography variant="h3" className={classes.headline}>
        Software developer
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Home);
