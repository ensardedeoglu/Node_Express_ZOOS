const { NODE_ENV = "development" } = process.env;
const express = require("express")
const app = express();


// Middleware
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

//Routes
app.get("/check/:zip", getZoos, (res, req, send) => {
  console.log(zoos, 123121)
  const zip = req.params.zip;
  if (zip === 33890, 34117, 10460, 02121, 07502) {
    next(`${zip} exists in our records.`)
  } else (
    res.send(`${zip} does not exist in our records.`)
  )
})

app.get("/zoos/:zip", getZoos, (res, req, send) => {
  const zip = req.params.zip;
  if (zip && zip === zoos[zip]) {
    next(`${zip} zoos: `)
  }
})



//error
app.use((err, req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});


module.export = app