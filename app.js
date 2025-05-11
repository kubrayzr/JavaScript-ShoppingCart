///Alışveriş sepeti uygulaması
// ürün olarak istediğin bir ürünü ekliceksin 
// Sırayla işlem yapılsın ilk önce bir tane ürün olsun 
// Bir tane ürünün image-ismi-adedi-parası parametreleri olucak
// Ürün adedi ele ve yanda ki butonlarla değiştirebilir olucak
// Sağ üste ürün ekle butonu olucak ve ürün ekleyebilceksin

/***************************************************************************************************** */

// Bu kod Ürün sepette yoksa ekler,Varsa miktarını artırır, Ardından güncel sepeti sayfada gösterir.

// boş alışveriş sepeti:  cart adlı boş bir dizi tanımlanıyor. Bu dizi, sepete eklenen ürünleri (isim, fiyat ve miktar bilgileriyle birlikte) 
// tutmak için kullanılır.
let cart = [];
//Kullanıcı bir ürünü sepete eklemek istediğinde çağrılacak olan fonksiyon.
function addToCart(name, price) {
  const item = cart.find(p => p.name === name);
  //cart dizisinde, ismi verilen ürün (name) daha önce sepete eklenmiş mi diye kontrol edilir. Eğer varsa, item değişkenine o ürün nesnesi atanır.
// Yoksa, item değeri undefined olur.
  if (item) {
    item.qty++;
//Eğer ürün sepette zaten varsa (item varsa), bu ürünün miktarını (qty) 1 artırır.

  } else {
    cart.push({ name, price, qty: 1 });
  }
//Eğer ürün sepette yoksa, yeni bir nesne olarak sepete eklenir.
// Nesne: { name, price, qty: 1 }
// Yani adı ve fiyatı belirtilen ürün, 1 adet olarak sepete eklenir.


//Her ürün ekleme işleminden sonra, sepetin güncel hali ekranda görüntülenmek üzere renderCart fonksiyonu çağrılır.
  renderCart();
}

function renderCart() {

//HTML'de id="cart" olan elementi bulur ve cartDiv adlı değişkene atar. (Sepet bilgilerini göstereceğimiz yer)
  const cartDiv = document.getElementById("cart");

//cartDiv içeriğini temizler. Böylece önceki sepet verileri silinir, sadece güncel veriler yazılır.
  cartDiv.innerHTML = "";

  //cart dizisindeki her ürün için:
// Ürünün adı (item.name)
// Miktarı (item.qty)
// Toplam fiyatı (price * qty)
// bir <p> etiketiyle cartDiv içine eklenir.
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} x ${item.qty} = ${item.price * item.qty} TL</p>`;
  }

);
}