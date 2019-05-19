import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AboutCard from "./aboutCard";
import Image from "../resources/about.jpg";

const styles = theme => ({
  background: {
    minHeight: "100vh",
    //backgroundColor: "rgb(0, 0, 50)"
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  grid: {
    display: "flex",
    width: "80vw",
    justifyContent: "center",
    marginTop: "10em",
    alignItems: "flex-start"
  }
});

const cards = [
  {
    logo: "M",
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    description:
      "MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need"
  },
  {
    logo: "E",
    name: "Express",
    link: "https://expressjs.com/",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications"
  },
  {
    logo: "R",
    name: "React",
    link: "https://reactjs.org/",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
  },
  {
    logo: "N",
    name: "Node.js",
    link: "https://nodejs.org/en/",
    description:
      "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications"
  }
];

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.background} id="Tools">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Grid container spacing={24} color="inherit" className={classes.grid}>
          {cards.map(item => (
            <Grid key={item["logo"]} item sm={3} xs={12}>
              <AboutCard card={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
