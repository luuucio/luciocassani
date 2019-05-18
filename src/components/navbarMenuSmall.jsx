import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  drawer: {
    paddingTop: 80
  }
});

class NavbarMenuSmall extends Component {
  state = {
    isDrawerOpen: false
  };

  handleDrawer = state => {
    this.setState({ isDrawerOpen: state });
  };

  render() {
    const { isDrawerOpen } = this.state;
    const { pages, classes } = this.props;
    return (
      <div>
        <IconButton
          color="inherit"
          onClick={() => this.handleDrawer(!isDrawerOpen)}
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          open={isDrawerOpen}
          onClose={() => this.handleDrawer(false)}
          onOpen={() => this.handleDrawer(true)}
          anchor="right"
        >
          <List className={classes.drawer}>
            {pages.map(page => (
              <ListItem key={page.name} component="a" href={`#${page.name}`}>
                <ListItemText>{page.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </div>
    );
  }
}
export default withStyles(styles)(NavbarMenuSmall);
