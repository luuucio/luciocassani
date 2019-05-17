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
    marginLeft: "40%"
  }
});

class AboutCard extends Component {
  state = {
    isCardOpen: false
  };

  handleExpandClick = () => {
    this.setState({
      isCardOpen: !this.state.isCardOpen
    });
  };

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
        >
          <CardContent>
            <Typography variant="h4" align="center">
              {card["logo"]}
            </Typography>
            <Typography align="center">
              <Link variant="subtitle1" href={card["link"]} target="_blank">
                {card["name"]}
              </Link>
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing={true}>
            <div className={classes.actions}>
              <IconButton
                aria-expanded={this.state.isCardOpen}
                aria-label="Show more"
              />
            </div>
          </CardActions>
          <Collapse in={this.state.isCardOpen} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{card.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
