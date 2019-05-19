import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Image from "../resources/contact.jpg";

const styles = theme => ({
  background: {
    display: "flex",
    height: "100vh",
    // backgroundColor: "rgb(0, 50, 0)",
    color: "white",

    minHeight: "100vh",
    //backgroundColor: "rgb(0, 0, 50)"
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  gridText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  gridIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

//const channels = [faLinkedinIn, faEnvelope, faGithub, faTwitter];
const channels = [
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/luciocassani/" },
  { icon: faEnvelope, link: "mailto:info@luciocassani.it" },
  { icon: faGithub, link: "https://github.com/luuucio" },
  { icon: faTwitter, link: "https://twitter.com/luuucioc" }
];

const Contact = props => {
  const { classes } = props;

  return (
    <div className={classes.background} id="Contact">
      <Grid container>
        <Grid container className={classes.gridIcons}>
          <Grid />

          {channels.map(channel => (
            <Grid
              key={channel.link}
              item
              xs={3}
              sm={2}
              className={classes.gridIcons}
            >
              <IconButton
                href={channel.link}
                target="_blank"
                variant="h3"
                color="inherit"
              >
                <FontAwesomeIcon icon={channel.icon} size="3x" />
              </IconButton>
            </Grid>
          ))}

          <Grid />
        </Grid>
        <Grid container />
        <Grid container />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Contact);
