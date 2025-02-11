// Them cac framework can thiet
const express = require("express");
const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route");

// Khoi tao ung dung, mot the hien cua express
const app = express();

// Dinh nghia cac middleware, 
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

// Dinh nghia cac route
app.get("/", (req, res) => {
  res.json({ message: "Wellcome to contact book application." });
})

//Xuat module app de co the su dung o file khac
module.exports = app;


