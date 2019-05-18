import React from "react";
import { Hidden, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const styles = theme => ({
  menuButtons: {
    marginRight: "1em",
    cursor: "pointer"
  }
});

const NavbarMenuLarge = props => {
  const { pages, classes } = props;
  return (
    <Hidden only={["xs"]}>
      {pages.map(page => (
        // <Button
        //   key={page.name}
        //   color="inherit"
        //   // href={`#${page.reference}`}
        //   onClick={() => scrollToRef(page.reference)}
        //   size="large"
        //   className={classes.button}
        // >
        //   {page.name}
        // </Button>
        <Link
          key={page.name}
          activeClass="active"
          to={page.name}
          spy={true}
          smooth="easeOutQuart"
          offset={0}
          duration={500}
        >
          <Typography
            color="inherit"
            variant="subtitle1"
            className={classes.menuButtons}
          >
            {page.name}
          </Typography>
        </Link>
      ))}
      <span style={{ marginRight: "5em" }} />
    </Hidden>
  );
};

export default withStyles(styles)(NavbarMenuLarge);
