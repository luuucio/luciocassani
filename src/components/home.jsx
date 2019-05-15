import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Image from "../resources/mouse.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }
});

const Home = props => {
  const { classes } = props;
  return <div className={classes.background} />;
};

export default withStyles(styles)(Home);
