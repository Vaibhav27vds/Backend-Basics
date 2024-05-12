import express from "express" 

const app = express()

app.get("/", (req, res) => {
    res.send("Data Modelling")
})

const port = 3000

app.listen(port, ()=> {
    console.log(`Listening on ${port}`)
} )