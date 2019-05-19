import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AboutCard from "./aboutCard";
import Image from "../resources/about.jpg";
import getCards from "../resources/cards";

const styles = theme => ({
  background: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  grid: {
    display: "flex",
    width: "90vw",
    justifyContent: "center",
    marginTop: "10em",
    alignItems: "flex-start"
  }
});

// In the future getCards() could be an HTTP request
const cards = getCards();

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="Tools">
      {/* In the mobile version, the cards expand consistently, so we need to set minHeigt */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Grid container spacing={24} color="inherit" className={classes.grid}>
          {cards.map(item => (
            <Grid key={item["logo"]} item md={3} sm={6} xs={12}>
              <AboutCard card={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
