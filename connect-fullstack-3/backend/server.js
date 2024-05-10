import dotenv from "dotenv"
import express from "express" 
const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// });

// get a list of 5 jokes 
app.use(express.static('dist'))
app.get("/api/jokes", (req,res) => {
    const jokes = [
        {
          id: 1,
          title: "Why did the chicken cross the road?",
          content: "To get to the other side!"
        },
        {
          id: 2,
          title: "Why was the math book sad?",
          content: "Because it had too many problems."
        },
        {
          id: 3,
          title: "What do you call a fake noodle?",
          content: "An impasta!"
        },
        {
          id: 4,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 5,
          title: "What do you get when you cross a snowman and a vampire?",
          content: "Frostbite!"
        }
      ];
      res.send(jokes)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})