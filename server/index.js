const port = require("./config");
const express = require("express");
const cookieParser = require('cookie-parser');
const router = require("./routes/task.routes");//aqui se importo la url desde task routes 

const cors = require('cors');

const app = express();
app.use(cookieParser()); 

//se utiliza para controlar y permitir solicitudes desde dominios diferentes. '*' significa que cualquier origen esta permitido.
app.use(cors({
  origin: '*'
}));


app.use(express.json()); //permite a express entender json
app.use(router);

app.listen(port, () => {
  console.log("Server on port:" + port);
});

// app.get('/obtenerCookie', (req, res) => {
//   console.log(req.cookies)
//   // if (id) res.send(id)
//   // res.send(null)
// });