const express = require('express');
const path = require('path');
const api = require('./routes/index')

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);





app.listen(PORT, () => {
    console.log(`You have been connected (ㆆ_ㆆ)  http://localhost:${PORT}`);
  });