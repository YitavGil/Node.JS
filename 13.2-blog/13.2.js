// CRUD create read update delete

// const mongodb = require("mongodb");
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);
  console.log(`Connected to database ${databaseName}`);
  //!1 single insert
  // db.collection("users").insertOne({ name: "name", email: "name@gmail.con" }, (error, user) => {
  //   if (error) {
  //     console.log("error");
  //     return;
  //   }
  //   console.log(user.ops);
  // });
  //! Add users

  db.collection("users").users.createIndex({ email: 1 }, { unique: true });
  insertMany(

    [
      {
        name: "mr name",
        email: "name2@gmail.com",
      },
      {
        name: "ms name",
        email: "name3@gmail.com",
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }
      console.log(result.ops);
    }
  );


  //! Adding posts
  db.collection("posts").insertMany(
    [
      {
        title: "changing the world",
        text: "this world is totally new",
        tags: ["Philosophy", "Insanity"],
        owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
      },
      {
        title: "change the world back",
        text: "Hello world",
        tags: ["Tech", "Science"],
        owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }
      console.log(result.ops);
    }
  );

  //! adding comments to a post
  db.collection("comments").insertMany(
    [
      {
        text: "thank you for this post",
        owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
      },
      {
        text: "this is the worst post ever",
        owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }
      console.log(result.ops);
    }
  );
});
