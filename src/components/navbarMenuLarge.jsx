import React from "react";
import { Hidden, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {}
});

const NavbarMenuLarge = props => {
  const { pages, classes } = props;
  console.log(props);
  return (
    <Hidden only={["xs"]}>
      {Object.keys(pages).map(page => (
        <Button
          key={page}
          color="inherit"
          href={`#${page}`}
          size="large"
          className={classes.button}
        >
          {page}
        </Button>
      ))}
    </Hidden>
  );
};

export default withStyles(styles)(NavbarMenuLarge);
