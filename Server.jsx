const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/boshqarma', (req, res) => {
  res.json([
    { title: 'Card 1', description: 'This is the description for card 1' },
    { title: 'Card 2', description: 'This is the description for card 2' },
    { title: 'Card 3', description: 'This is the description for card 3' },
    { title: 'Card 4', description: 'This is the description for card 4' },
    { title: 'Card 5', description: 'This is the description for card 5' }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
