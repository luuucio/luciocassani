import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, SwipeableDrawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {}
});

const NavbarMenuSmall = props => {
  return (
    <div>
      <IconButton color="inherit">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer open={false} />
    </div>
  );
};

export default withStyles(styles)(NavbarMenuSmall);
