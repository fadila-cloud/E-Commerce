let penghitung = 0;
//fungsi untuk mengurangi nilai
function decrement() {
  if (penghitung > 0) {
    //mencegah bila nilai negatif
    penghitung--;
    document.getElementById("value").innerHTML = penghitung;
  }
}
// fungsi untuk menambah nilai
function increment() {
  penghitung++;
  document.getElementById("value").innerHTML = penghitung;
}

let count = 0;
function myCart(button) {
  alert("Pesanan berhasil ditambahkan");
  button.innerHTML = "Ditambahkan ke keranjang";
  button.style.color = "red";
  button.style.backgroundColor = "rgb(232, 232, 232)";
  // bagian angka di keranjang ketika pesanan ditambahkan
  count++;
  document.getElementById("jumlah-cart").innerHTML = count;

  // Ambil elemen item tempat tombol berada
  let item = button.closest("item");
  //Ambil data produk
  let product = {
    image: item.querySelector("img").src,
    name: item.querySelector("h3").innerHTML,
    price: item.querySelector(".harga").innerHTML,
    location: item.querySelector(".alamat p").innerHTML,
  };
  //Ambil data keranjang yang ada di localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || []; //gunakan || dan [] supaya hasil tidak null
  //Tambahkan produk ke keranjang
  cart.push(product);
  //Simpan kembali di locaStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

//untuk shopping
document.addEventListener("DOMContentLoaded", function () {
  let cartContainer = document.getElementById("shopping-cart");
  //Ambil data keranjang dari localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Keranjang Kosong</p>";
    return;
  }

  //Menampilkan setiap produk
  cart.forEach((product) => {
    let itemHTML = `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <p class="location">${product.location}</p>
      <button onclick="removeItem('${product.name}')">Hapus</button>
    </div>`;
    cartContainer.innerHTML += itemHTML;
  });
});

//fungsi untuk menghapus item dari keranjang
function removeItem(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //hapus produk berdasarkan nama
  cart = cart.filter((product) => product.name !== productName);

  //simpan kembali ke localstorage
  localStorage.setItem("cart", JSON.stringify(cart));

  //refresh halaman
  location.reload();
}

function buy() {
  // menampilkan dialog konfirmasi yes or no
  let userConfirmed = confirm("Apakah ingin beralih ke orderan?");
  if (userConfirmed) {
    location = "shopping-cart.html";
    alert("Selamat Datang");
  } else {
    alert("Anda tetap di halaman ini");
  }
}
