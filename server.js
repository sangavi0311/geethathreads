
console.log("Server starting...");
console.log("FILE IS RUNNING");

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // ✅ no body-parser

let orders = [];

app.post('/order', (req, res) => {
  orders.push(req.body);
  res.json({ message: 'Order placed successfully!' });
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
