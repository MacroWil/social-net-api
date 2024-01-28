const connection = require("../config/connection");
const { Thoughts, Users } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const Thoughts = [
    {
      first,
      last,
      github,
      assignments,
    },
    {
      first,
      last,
      github,
      assignments,
    },
  ];

  // Add students to the collection and await the results
  await Thoughts.insertMany(Thoughts);
  await Users.insertMany(Users);

  // Log out the seed data to indicate what should appear in the database
  console.table(Users);
  console.table(Thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
