import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Typography
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  card: {
    "&:hover": {
      backgroundColor: "red",
      cursor: "pointer"
    }
  },
  actions: {
    display: "flex",
    alignItems: "flex-end"
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

  render() {
    const { classes, card, ...rest } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">
              {card["logo"]}
            </Typography>
            <Typography
              className={classes.card}
              component="a"
              variant="body2"
              href={card["link"]}
              align="center"
              target="_"
            >
              {card["name"]}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing={true}>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.isCardOpen}
              aria-label="Show more"
              display="flex"
              alignitem="flex-end"
              align="right"
            >
              <ExpandMoreIcon />
            </IconButton>
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
