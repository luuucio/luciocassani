import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AboutCard from "./aboutCard";

const styles = theme => ({
  background: {
    height: "100vh",
    backgroundColor: "#181818"
  },
  grid: {
    display: "flex",
    width: "80vw",
    justifyContent: "center"
  }
});

const cards = [
  {
    logo: "M",
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, modi."
  },
  {
    logo: "E",
    name: "Express",
    link: "https://expressjs.com/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, modi."
  },
  {
    logo: "R",
    name: "React",
    link: "https://reactjs.org/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, modi."
  },
  {
    logo: "N",
    name: "Node",
    link: "https://nodejs.org/en/",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, modi."
  }
];

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="About">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid container spacing={24} color="inherit" className={classes.grid}>
          {cards.map(item => (
            <Grid key={item["logo"]} item sm={3} xs={6}>
              <AboutCard card={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
