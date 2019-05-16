import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const styles = theme => ({
  card: {
    a: {
      color: "#e81c4f"
    }
  }
});

class AboutCard extends Component {
  state = {
    isCardOpen: false
  };
  render() {
    const { classes, card } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" align="center">
              {card["logo"]}
            </Typography>
            <Typography
              component="a"
              href={card["link"]}
              align="center"
              target="_"
            >
              {card["name"]}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
