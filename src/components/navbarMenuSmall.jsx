import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const styles = theme => ({
  drawerList: {
    paddingTop: 80
  },
  drawer: {
    backgroundColor: "rgb(0,0,0)"
  },
  drawerText: {
    color: "white"
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
          classes={{ paper: classes.drawer }}
        >
          <List className={classes.drawerList}>
            {pages.map(page => (
              <ListItem key={page.name}>
                <Link
                  key={page.name}
                  activeClass="active"
                  to={page.name}
                  spy={true}
                  smooth="easeOutQuart"
                  offset={0}
                  duration={500}
                >
                  <Typography className={classes.drawerText}>
                    {page.name}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </div>
    );
  }
}
export default withStyles(styles)(NavbarMenuSmall);
