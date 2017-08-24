const express = require('express')
const app = express()
const path = require('path')


// Make public a static dir
app.use(express.static("public"));


app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000')
})