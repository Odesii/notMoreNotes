const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`You have been connected!  http://localhost:${PORT}`);
  });