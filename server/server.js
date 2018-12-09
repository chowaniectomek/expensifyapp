const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.resolve('dist');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is running');
});
