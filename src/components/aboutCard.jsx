import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Link,
  Typography
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  actions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
});

class AboutCard extends Component {
  state = {
    isCardOpen: false
  };

  // Mobile version: the cards expand touching the display
  handleExpandClick = () => {
    this.setState({
      isCardOpen: !this.state.isCardOpen
    });
  };

  // Desktop version: the cards expand hovering on mouse
  handleMouseInCard = param => {
    this.setState({
      isCardOpen: param
    });
  };

  render() {
    const { classes, card } = this.props;
    return (
      <div>
        <Card
          onMouseEnter={() => this.handleMouseInCard(true)}
          onMouseLeave={() => this.handleMouseInCard(false)}
          onClick={this.handleExpandClick}
        >
          <CardContent>
            <Typography variant="h4" align="center">
              {card.logo}
            </Typography>
            <Typography align="center" variant="subtitle1">
              {card.name}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing={true}>
            <div className={classes.actions}>
              <IconButton
                aria-expanded={this.state.isCardOpen}
                aria-label="Show more"
              />
              <ExpandMoreIcon />
            </div>
          </CardActions>
          <Collapse in={this.state.isCardOpen} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{card.description}</Typography>
              <Typography paragraph>
                <Link href={card.link} target="_blank" rel="noreferrer">
                  Learn more
                </Link>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
