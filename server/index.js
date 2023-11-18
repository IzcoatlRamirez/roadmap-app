const port = require("./config");
const express = require("express");
const cookieParser = require('cookie-parser');
const router = require("./routes/task.routes");//aqui se importo la url desde task routes 

const cors = require('cors');

const app = express();
const nodemailer = require("nodemailer")
app.use(cookieParser()); 

//se utiliza para controlar y permitir solicitudes desde dominios diferentes. '*' significa que cualquier origen esta permitido.
app.use(cors({
  origin: '*'
}));

app.use(express.json()); //permite a express entender json
app.use(router);


const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'gonzaleznomad33@gmail.com',
            pass: 'sfak ymrp ecfu necw',
         },
    secure: true,
    });
    
    app.post('/api/email', (req, res) =>{
        const mailData = {
            from: 'gonzaleznomad33@gmail.com', 
              to: req.body.toMail,   
              subject:  req.body.subject,
              
              html: req.body.message,
            };

            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  console.log(err);
                  res.status(500).send("Error al enviar el correo electrónico");

                 } else{
                  console.log(info);
                  res.status(200).send("Correo electrónico enviado con éxito");
                 }
             });
    
    });


app.listen(port, () => {
  console.log("Server on port:" + port);
});

// app.get('/obtenerCookie', (req, res) => {
//   console.log(req.cookies)
//   // if (id) res.send(id)
//   // res.send(null)
// });