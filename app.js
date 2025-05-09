///Alışveriş sepeti uygulaması
// ürün olarak istediğin bir ürünü ekliceksin 
// Sırayla işlem yapılsın ilk önce bir tane ürün olsun 
// Bir tane ürünün image-ismi-adedi-parası parametreleri olucak
// Ürün adedi ele ve yanda ki butonlarla değiştirebilir olucak
// Sağ üste ürün ekle butonu olucak ve ürün ekleyebilceksin

let cart = [];

function addToCart(name, price) {
  const item = cart.find(p => p.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} x ${item.qty} = ${item.price * item.qty} TL</p>`;
  });
}