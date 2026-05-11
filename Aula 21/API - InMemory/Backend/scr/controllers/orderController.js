const order = []

export const getOrders = (req, res) => {
    res.status(200).send(order);
}

export const getOrderById = (req, res) => {
    const {id} = req.params;

    const findOrder = order.find((o) => o.id == id);

    if(!findOrder) {
        return res.status(404).send({response: "Pedido não encontrado!"});
    }

    return res.status(200).send(findOrder);
}

export const createOrder = (req, res) => {
    const {client,itens, status} = req.body;
    try {
        const totalValue = itens.reduce((sum, item) =>{
            return sum + (item.price * item.quantity);
        }, 0);

        const newOrder = {
            id: order.length + 1,
            client,
            itens,
            totalValue,
            status: status || "Pendente"
        };

        order.push(newOrder);

        return res.status(201).send({response: "Pedido criado com sucesso!", order: newOrder});
    }catch{
        return res.status(500).send({response: "Ocorreu um erro ao criar o pedido!"})
    }
}

export const updateOrder = (req, res) => {
    const {id} = req.params;
    const {client, itens, status} = req.body;

    const findOrder = order.find((o) => o.id == id);

    if(!findOrder) {
        return res.status(404).send({response: "Pedido não encontrado!"});
    }

    const totalValue = itens.reduce((sum, item) =>{
        return sum + (item.price * item.quantity);
    }, 0);
    
    findOrder.client = client;
    findOrder.itens = itens;
    findOrder.totalValue = totalValue; 
    findOrder.status = status;

    return res.status(200).send({response: "Pedido atualizado com sucesso!", order: findOrder});

};

export const deleteOrder = (req, res) => {
    const {id} = req.params;

    const index = order.findIndex((o) => o.id == id);

    if(index === -1) {
        return res.status(404).send({response: "Pedido não encontrado!"});
    }
    
    order.splice(index, 1);

    return res.status(200).send({response: "Pedido deletado com sucesso!"});
};   