const connection = require("../config/connection");
const { Thoughts, Users } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
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

  const thoughtsData = [
    {
      _id: "65b81e25ae9cb7d74f877b07",
      thoughtText: "POTATOES",
      username: "maincharacter",
      createdAt: "2024-01-29T21:52:37.038Z",
      reactions: [
        {
          reactionBody: "PO TA TOES, boil em mash em stick em in a stew",
          username: "morgyman",
          _id: "65b81fdbae9cb7d74f877b1a",
          reactionId: "65b81fdbae9cb7d74f877b1b",
          createdAt: "2024-01-29T21:59:55.937Z",
        },
      ],
      __v: 0,
      totalReactionS: 1,
    },
    {
      _id: "65b820e9ae9cb7d74f877b29",
      thoughtText: "True facts about morgan freeman!",
      username: "morgyman",
      createdAt: "2024-01-29T22:04:25.240Z",
      reactions: [],
      __v: 0,
      totalReactionS: 0,
    },
  ];

  const usersData = [
    {
      _id: "65b81c09fe872543d31277b3",
      username: "morgyman",
      email: "notmorganfreeman@gmail.com",
      thoughts: ["65b820e9ae9cb7d74f877b29"],
      friends: [],
      __v: 0,
      friendCount: 0,
    },
    {
      _id: "65b81ca681d28528d00d0654",
      username: "bestman",
      email: "samwisegamgee@gmail.com",
      thoughts: [],
      friends: ["65b81c09fe872543d31277b3"],
      __v: 0,
      friendCount: 1,
    },
    {
      _id: "65b81d1081d28528d00d0661",
      username: "maincharacter",
      email: "samwisegamgee2@gmail.com",
      thoughts: ["65b81e25ae9cb7d74f877b07"],
      friends: [],
      __v: 0,
      friendCount: 0,
    },
  ];

  await Thoughts.insertMany(thoughtsData);
  await Users.insertMany(usersData);

  console.table(usersData);
  console.table(thoughtsData);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
