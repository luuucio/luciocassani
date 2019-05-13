import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  List,
  Hidden,
  IconButton,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    flex: 1
  },
  button: {
    textTransform: "capitalize"
  },
  drawerPaper: {
    background: theme.palette.primary.main
  }
});

const getLink = item => {
  return `#${item}`;
};

const Navbar = props => {
  const { classes, pages } = props;
  return (
    <AppBar style={{ background: "#0E1215", boxShadow: "none" }}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" color="inherit">
          {props.title}
        </Typography>

        {/* Screens from XL down to SM */}

        <Hidden only={["xs"]}>
          {Object.keys(pages).map(page => (
            <Button
              key={page}
              color="inherit"
              href={getLink(page)}
              size="large"
              className={classes.button}
            >
              {page}
            </Button>
          ))}
        </Hidden>

        {/* Only XS */}

        <Hidden only={["sm", "md", "lg", "xl"]}>
          <IconButton color="inherit" onClick={props.onClick}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            open={props.isDrawerOpen}
            onOpen={console.log}
            onClose={props.onClick}
            anchor="right"
            classes={{ paper: classes.drawerPaper }}
          >
            <List style={{ paddingTop: 80 }}>
              {Object.keys(pages).map(item => (
                <ListItem component="a" href={getLink(item)} key={item}>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
