// fungsi Shopping-cart
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

// fungsi E-Commerce
function myCart() {
  let cartt = document.querySelectorAll("#troli-cart");
  alert("Pesanan berhasil ditambahkan");
  document.getElementById("troli-cart").innerHTML = "Ditambahkan ke keranjang";
  cartt.style.color = "red";
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
