const result = document.querySelector(".result");

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/api/airtable");
    const products = data
      .map((product) => {
        const { id, url, name, price } = product;
        return `<a href="product.html?id=${id}" class="product">
        <img src="${url}" alt="${name}" />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
        </div>
      </a>`;
      })
      .join("");

    result.innerHTML = products;
  } catch (error) {
    console.log(error);
    result.innerHTML = "<h2>There is an error. Please try again later.</h2>";
  }
};

fetchProducts();
