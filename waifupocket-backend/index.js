const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

//Komuniakcja z aplikacją
const corsOptions ={
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
}
app.use(cors(corsOptions));

//GET
app.get('/api/data', (req, res) => {
  // Handle your API logic here
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});