const API = "http://localhost:8080/order";

    let itens = [];
    let editingId = null;

    async function loadOrders(){

      const response = await fetch(`${API}/list`);
      const data = await response.json();

      const ordersDiv = document.getElementById("orders");

      ordersDiv.innerHTML = "";

      data.forEach(order => {

        ordersDiv.innerHTML += `
          <div class="order">

            <h3>Pedido #${order.id}</h3>

            <p><strong>Cliente:</strong> ${order.client}</p>

            <p><strong>Status:</strong> ${order.status}</p>

            <p><strong>Total:</strong> R$ ${order.totalValue}</p>

            <h4>Itens:</h4>

            ${order.itens.map(item => `
              <div class="item">
                ${item.name} -
                R$ ${item.price} x ${item.quantity}
              </div>
            `).join("")}

            <div class="actions">
                <button class="btn-delete"
                    onclick="deleteOrder(${order.id})">
                    Excluir
                </button>
                <button class="btn-update"
                    onclick="editOrder(${order.id})">
                    Editar
                </button>
            </div>

          </div>
        `;
      });

    }

    function addItem(){

      const name = document.getElementById("itemName").value;
      const price = document.getElementById("itemPrice").value;
      const quantity = document.getElementById("itemQuantity").value;

      if(!name || !price || !quantity){
        alert("Preencha todos os campos!");
        return;
      }

      itens.push({
        name,
        price:Number(price),
        quantity:Number(quantity)
      });

      renderItems();

      document.getElementById("itemName").value = "";
      document.getElementById("itemPrice").value = "";
      document.getElementById("itemQuantity").value = "";
    }

function renderItems(){

  const div = document.getElementById("itemsList");

  div.innerHTML = "";

  itens.forEach((item, index) => {

    div.innerHTML += `
      <div class="item">

        ${item.name} -
        R$ ${item.price} x ${item.quantity}

        <button
          onclick="removeItem(${index})"
          class="btn-remove"
        >
          X
        </button>

      </div>
    `;

  });

}

function removeItem(index){

  itens.splice(index, 1);

  renderItems();

}

    async function createOrder(){

  const client = document.getElementById("client").value;

  const status = document.getElementById("status").value;

  if(!client || itens.length === 0){

    alert("Preencha os dados!");

    return;

  }

  const body = {
    client,
    status,
    itens
  };

  // MODO EDIÇÃO
  if(editingId){

    const response = await fetch(
      `${API}/update/${editingId}`,
      {
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
      }
    );

    const data = await response.json();

    alert(data.response);

    editingId = null;

    document.querySelector(".btn-create").innerText =
      "Criar Pedido";

  }

  // MODO CRIAÇÃO
  else{

    const response = await fetch(
      `${API}/create`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
      }
    );

    const data = await response.json();

    alert(data.response);

  }

  // limpa formulário
  itens = [];

  renderItems();

  document.getElementById("client").value = "";

  document.getElementById("status").value = "Pendente";

  loadOrders();

}

async function editOrder(id){

  const response = await fetch(`${API}/list/${id}`);

  const order = await response.json();

  // salva ID em edição
  editingId = id;

  // preenche formulário
  document.getElementById("client").value = order.client;

  document.getElementById("status").value = order.status;

  // carrega itens
  itens = order.itens;

  renderItems();

  // muda botão
  document.querySelector(".btn-create").innerText =
    "Salvar Alterações";

}

    loadOrders();