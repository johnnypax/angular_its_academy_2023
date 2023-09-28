const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();  

const app = express();
app.use(cors())                     //Enable external access
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGOSTRING, {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Sono in ascolto sulla porta ${process.env.PORT}`)
})

//----------------- ROTTO API ------------------------

const inserimentoProd = require("./controllers/Prodotto/inserimento");
const cercatuttiProd = require("./controllers/Prodotto/cercatutti");
const cercasingoloProd = require("./controllers/Prodotto/cercasingolo");
const eliminaProd = require("./controllers/Prodotto/elimina");
const modificaProd = require("./controllers/Prodotto/modifica");
const modificaPuntualeProd = require("./controllers/Prodotto/modificaPuntuale");

app.post("/api/prodotto", inserimentoProd)
app.get("/api/prodotto", cercatuttiProd)
app.get("/api/prodotto/:id", cercasingoloProd)
app.delete("/api/prodotto/:id", eliminaProd)
app.put("/api/prodotto/:id", modificaProd)
app.patch("/api/prodotto/:id", modificaPuntualeProd)