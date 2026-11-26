const products = getAvailableProducts();

function renderProducts(products) {
  const list = document.querySelector("#products");

  list.innerHTML = "";

  products.forEach((product) => {
    const item = document.createElement("li");

    item.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;

    list.appendChild(item);
  });
}

renderProducts(products);
