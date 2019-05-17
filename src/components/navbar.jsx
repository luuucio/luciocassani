import React from "react";
import { AppBar, Hidden, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import NavbarMenuLarge from "./navbarMenuLarge";
import NavbarMenuSmall from "./navbarMenuSmall";

const styles = theme => ({
  title: {
    flex: 1,
    marginLeft: "5em"
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "rgb(0,0,0)"
  }
});

const Navbar = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            {props.title}
          </Typography>

          {/* All screen sizes except XS */}
          <Hidden only="xs">
            <NavbarMenuLarge pages={props.pages} />
          </Hidden>

          {/* Only XS size */}
          <Hidden only={["xl", "lg", "md", "sm"]}>
            <NavbarMenuSmall pages={props.pages} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(Navbar);
