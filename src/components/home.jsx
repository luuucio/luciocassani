import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Image from "../resources/mouse.jpg";
import { Typography, Zoom } from "@material-ui/core";

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
class Home extends Component {
  state = {
    showText: false
  };
  componentDidMount() {
    this.setState({
      showText: true
    });
  }
  render() {
    const { classes } = this.props;
    const { showText } = this.state;
    return (
      <div className={classes.background} id="Home">
        {showText && (
          <Zoom in timeout={2000}>
            <Typography variant="h3" className={classes.headline}>
              Software developer
            </Typography>
          </Zoom>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
