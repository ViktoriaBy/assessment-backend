const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["A beautiful, smart, and loving person will be coming into your life",
					 "Let the world be filled with tranquility and goodwill.",
					 "If you wish to see the best in others, show the best of yourself.",
           "Congratulations! You are on your way.",
           "Disbelief destroys the magic.",
           "Failure is the path of lease persistence.",
           "Happiness begins with facing life with a smile and a wink.",
           "Embrace this love relationship you have!",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  
  res.status(200).send(randomCompliment);
  
});
// let characters
let users = []

app.get('/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/users/:name', (req, res) => {
  const { name } = req.params
  
  res.status(200).send(users[index])
})



let id = []

app.post('/users', (req, res) => {
  let newUser = {...req.body, id}
  users.unshift(newUser)
  res.status(200).send(users)
  id++
})

 




app.listen(4000, () => console.log("Server running on 4000"));
