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
        <Grid container>
          <Grid item xs={12} className={classes.gridText}>
            <Typography variant="h3" color="inherit">
              Contact me at:
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.gridIcons}>
          <Grid />

          {channels.map(channel => (
            <Grid
              key={channel.icon}
              item
              xs={3}
              sm={1}
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
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Contact);
