const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { name: 'Aisha Mels', stack: 'Backend Developer (Python, PHP, C#)' });
});

app.listen(3000, () => {
  console.log('Portfolio running at http://localhost:3000');
});