import React, { Component } from "react";
import { AppBar, Hidden, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import NavbarMenuLarge from "./navbarMenuLarge";

const styles = theme => ({
  title: {
    flex: 1
  }
});

class Navbar extends Component {
  state = {
    isDrawerOpen: false
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit">
              {this.props.title}
            </Typography>

            {/* All screen sizes except XS */}
            <Hidden only="xs">
              <NavbarMenuLarge pages={this.props.pages} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Navbar);
