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
let count = 0;
function myCart(button) {
  // saya gunakan this supaya langsung menuju ke button
  alert("Pesanan berhasil ditambahkan");
  button.innerHTML = "Ditambahkan ke keranjang";
  button.style.color = "red";
  // bagian angka di keranjang ketika pesanan ditambahkan
  count++;
  document.getElementById("jumlah-cart").innerHTML = count;
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
