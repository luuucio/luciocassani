import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const styles = theme => ({
  background: {
    height: "93vh",
    backgroundColor: "grey"
  }
});

const cards = {
  M: "MongoDB",
  E: "Express",
  R: "React",
  N: "Node"
};

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="About">
      <Grid container spacing={24} color="inherit">
        {Object.keys(cards).map(card => (
          <Grid key={card} item sm={3} xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h4" align="center">
                  {card}
                </Typography>
                <Typography
                  component="a"
                  href="https://www.mongodb.com/"
                  align="center"
                  target="_"
                >
                  {cards[card]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(About);
