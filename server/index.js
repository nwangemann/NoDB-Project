const express = require("express");

const app = express();

app.use(express.json());

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const ctrl = require('./controllers/controller')
const { getMenu, getOrders, placeOrder, deleteOrder, editOrder, getOrderById } = require('./controllers/controller')


app.get('/api/menu', getMenu)
app.get('/api/orders', getOrders)
app.get('/api/order/:id', getOrderById)
app.post('/api/create', placeOrder)
app.delete('/api/cancel/:id', deleteOrder)
app.put('/api/edit/:id', editOrder)