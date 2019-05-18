import React from "react";
import { Hidden, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = theme => ({
  button: {
    scrollBehavior: "smooth"
  }
});

const scrollToRef = reference =>
  window.scrollTo(0, reference.current.offsetTop);

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
          offset={-70}
          duration={500}
        >
          {page.name}
        </Link>
      ))}
      <span style={{ marginRight: "5em" }} />
    </Hidden>
  );
};

export default withStyles(styles)(NavbarMenuLarge);
