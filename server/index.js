const express = require("express");
const cors = require("cors");


const app = express();
const {getDogs, createDog, deleteDog, updateDog} = require('./controller')
const port = 4000

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



app.get(`/api/dogs`, getDogs)
app.post(`/api/dogs`, createDog)
app.put(`/api/dogs/:id`, updateDog)
app.delete(`/api/dogs/:id`, deleteDog)








app.listen(port, () => console.log("Server running on 4000"));
