const getCards = () => {
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
  return cards;
};

module.exports = getCards;
