import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
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
    color: "white",
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const channels = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/luciocassani/"
  },
  { name: "Email", icon: faEnvelope, link: "mailto:info@luciocassani.it" },
  { name: "Github", icon: faGithub, link: "https://github.com/luuucio" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/luuucioc" }
];

const Contact = props => {
  const { classes } = props;

  return (
    <div className={classes.background} id="Contact">
      <Grid container>
        <Grid container className={classes.grid}>
          <Grid />

          {channels.map(channel => (
            <Grid
              key={channel.link}
              item
              xs={3}
              sm={2}
              className={classes.grid}
            >
              <IconButton
                href={channel.link}
                target="_blank"
                rel="noreferrer"
                variant="h3"
                color="inherit"
                aria-label={channel.name}
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
