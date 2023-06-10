// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());




app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
export default app;