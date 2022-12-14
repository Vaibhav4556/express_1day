// const express = require("express");

import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import cors from 'cors'
const app = express();

dotenv.config()
console.log(process.env.MONGO_URL) //env=>env variables
const PORT = process.env.PORT;

//const MONGO_URL ="mongodb://localhost"  // work in node 16 and before

//const MONGO_URL = "mongodb://127.0.0.1"; // work in node 16+ and before
const MONGO_URL =process.env.MONGO_URL

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongodb is connected");
  return client;
}

const client = await createConnection(); // this client we can use in apis anywhere

app.use(express.json()); // middlewear=>intercept--convert body to json
app.use(cors())

app.get("/", (req, res) => {
  res.send("hello world !!!!!!");
});

// movies

// const movies = [
//   {
//     id: "99",
//     name: "Vikram",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//     rating: 8.4,
//     summary:
//       "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
//   },
//   {
//     id: "100",
//     name: "RRR",
//     poster:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rating: 8.8,
//     summary:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
//   },
//   {
//     id: "101",
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//   },
//   {
//     id: "102",
//     name: "No Country for Old Men",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//   },
//   {
//     id: "103",
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//   },
//   {
//     id: "104",
//     name: "The Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//   },
//   {
//     id: "105",
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//   },
//   {
//     id: "106",
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//   },
//   {
//     id: "107",
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
//   },
// ];

app.get("/movies", async (req, res) => {
  //db.movies.find({})
 
  if (req.query.rating>0)
  {
    req.query.rating=+req.query.rating
  }

  console.log(req.query)

  const movies = await client
    .db("vaibhav")
    .collection("movies")
    .find(req.query)
    .toArray();

  res.send(movies);
});

app.get("/movies/:id", async (req, res) => {
  //db.movies.findOne({id:"101"})

  const { id } = req.params;
  console.log(req.params, id);

  // const movie = movies.find((e) => e.id === id);
  const movie = await client
    .db("vaibhav")
    .collection("movies")
    .findOne({ id: id });

  movie ? res.send(movie) : res.status(404).send({ msg: "Movie not found" });
});

app.post("/movies", async (req, res) => {
  //db.movies.find({})

  const data = req.body;
  const result = await client
    .db("vaibhav")
    .collection("movies")
    .insertMany(data);

  res.send(result);
});


app.delete("/movies/:id", async (req, res) => {
  //db.movies.findOne({id:"101"})

  const { id } = req.params;
  console.log(req.params, id);

  // const movie = movies.find((e) => e.id === id);
  const result = await client
    .db("vaibhav")
    .collection("movies")
    .deleteOne({ id: id });

  result.deletedCount > 0
  ? res.send({ msg: "successfully deleted" }) 
  : res.status(404).send({ msg: "Movie not found" });
});


//UPDATAE:=>PUT

app.put("/movies/:id", async (req, res) => {
  //db.movies.findOne({id:"101"})

  const { id } = req.params;
  console.log(req.params, id);
  const data=req.body;

  // const movie = movies.find((e) => e.id === id);
  const result = await client
    .db("vaibhav")
    .collection("movies")
    .updateOne({ id: id },{$set: data});
   
    result.modifiedCount > 0
   ? res.send({msg:"movie successfully updated"}) 
   : res.status(404).send({ msg: "Movie not updated" });
});


//MOBILES

// const mobiles = [
//   {
//     model: "OnePlus 9 5G",
//     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     company: "Oneplus"
//   },
//   {
//     model: "Iphone 13 mini",
//     img:
//       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     company: "Apple"
//   },
//   {
//     model: "Samsung s21 ultra",
//     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     company: "Samsung"
//   },
//   {
//     model: "Xiomi mi 11",
//     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     company: "Xiomi"
//   }
// ];
//get mobiles is postman
app.get("/mobiles", async(req, res) => {

   const mobile = await client
    .db("vaibhav")
    .collection("mobiles")
    .find(req.query)
    .toArray();

  res.send(mobile);
});

//create mobiles in postman 

app.post("/mobiles", async (req, res) => {
  //db.movies.find({})

  const data = req.body;
  const result = await client
    .db("vaibhav")
    .collection("mobiles")
    .insertMany(data);

  res.send(result);
});



app.listen(PORT, () => console.log(`App is started in ${PORT}`));

// cntl+c   Kill the server
