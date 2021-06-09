const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log(req.headers);
  res.set('Cache-Control', 'no-store');
  res.send(req.headers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
