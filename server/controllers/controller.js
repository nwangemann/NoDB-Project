let id = 2
let menu = [
    {
        id: 0,
        item: "Grillenium Falcon: Gourmet Grilled Cheese",
        cost: 10.00,
        alter_item: 'w/ Tomato',
        alter_item_cost: 1.00,
    },
    {
        id: 1,
        item: "Dantes Inferno: The Burger",
        cost: 12.00,
        alter_item: 'w/ Bacon and Grilled Onions',
        alter_item_cost: 2.00,
    },
    {
        id: 2,
        item: "Buddha Pizza: One With Everything",
        cost: 15.00,
        alter_item: 'w/ Bacon',
        alter_item_cost: 2.00,
    },
    {
        id: 3,
        item: "Fleetwood Mac & Cheese",
        cost: 11.00,
        alter_item: 'w/ Bacon',
        alter_item_cost: 2.00,
    },
    {
        id: 4,
        item: "Bean Me Up, Scotty- Quinoa, Bean & Veggie Bowl",
        cost: 12.00,
        alter_item: 'w/ Avacado',
        alter_item_cost: 2.00,
    }
]


let orders = [
    {
        id: 0,
        name: 'Roberta',
        item: 'Dantes Inferno: The Burger',
        quantity:  1,
        cost: 10.00,
        alt_checked: false,
        alter_item: 'w/ Bacon',
        alter_item_cost: 0,
        total: 10
    },
    {
        id: 1,
        name: 'Tyler',
        item: 'Buddha Pizza: One With Everything',
        quantity: 1,
        cost: 10,
        alt_checked: true,
        alter_item: 'w/ Avacado',
        alter_item_cost: 2,
        total: 10
    },
]



module.exports = {
    getMenu: (req, res) => {
        res.status(200).send(menu)
    },
    getOrders: (req, res) => {
        res.status(200).send(orders)
    },
    getOrderById: (req, res) => {
        let { id } = req.params;
        let index = orders.findIndex(order => {
            return +order.id === +id
        })
        res.status(200).send(orders[index])
    },
    placeOrder: (req, res) => {
        const { name, item, quantity, cost, alt_checked, alter_item, alter_item_cost } = req.body

        let newTotal = parseInt(cost) + parseInt(alter_item_cost)

        let newOrder = {
            id: id++,
            name,
            item,
            quantity,
            cost,
            alt_checked,
            alter_item,
            alter_item_cost,
            total: newTotal
        }
    
    orders.push(newOrder)
    res.status(200).send(orders)
    },
    deleteOrder: (req, res) => {
        let { id } = req.params;

        let index = orders.findIndex(order => {
            console.log('order body', order)
            return parseInt(order.id) === parseInt(id)
        })
        console.log('index', index)
        console.log('pre-slice', orders)
        orders.splice(index, 1)
        console.log('post-slice', orders)
        res.status(200).send(orders)
    },
    editOrder: (req, res) => {
        let { id } = req.params;
        let {  name, item, quantity, cost, alt_checked, alter_item, alter_item_cost  } = req.body
        let index = orders.findIndex(order => {
            return parseInt(order.id) === parseInt(id)
        })

        let total = parseInt(cost) + parseInt(alter_item_cost)
        

        let updatedOrder = {
            id,
            name,
            item,
            quantity,
            cost,
            alt_checked,
            alter_item,
            alter_item_cost,
            total: total
        }
        
        orders.splice(index, 1, updatedOrder)
        res.status(200).send(orders)
    }

}