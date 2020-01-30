const express = require("express");

const app = express();

app.use(express.json());

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const ctrl = require('./controllers/controller')
const { getMenu, getOrders, placeOrder, deleteOrder, editOrder } = require('./controllers/controller')


app.get('/api/menu', getMenu)
app.get('/api/orders', getOrders)
app.post('/api/order', placeOrder)
app.delete('/api/cancel/:id', deleteOrder)
app.put('/api/edit/:id', editOrder)