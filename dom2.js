// 1. Mengambil referensi elemen untuk fitur Ubah Tampilan
const judul = document.getElementById("judul");
const btnUbah = document.getElementById("btnUbah");

// Fitur Ubah Tampilan (Tombol Atas)
btnUbah.addEventListener("click", function() {
    judul.innerText = "Berhasil Diubah!";
    judul.style.color = "white";
    document.body.style.backgroundColor = "pink";
});

// 2. Mengambil referensi elemen untuk fitur LaporSis (Formulir)
const formLapor = document.getElementById("formLapor");
const inputNama = document.getElementById("nama");
const selectKategori = document.getElementById("kategori");
const textPesan = document.getElementById("pesan");

// Referensi elemen output hasil
const boxHasil = document.getElementById("hasil");
const outNama = document.getElementById("outNama");
const outKategori = document.getElementById("outKategori");
const outPesan = document.getElementById("outPesan");

// Fitur Submit Laporan
formLapor.addEventListener("submit", function(event) {
    // Mencegah halaman refresh saat form dikirim
    event.preventDefault();

    // Validasi sederhana: Cek apakah nama kosong
    if (inputNama.value.trim() === "") {
        alert("Nama wajib diisi!");
        return; // Berhenti di sini jika kosong
    }

    // Mengambil nilai dari input dan memasukkannya ke dalam elemen output
    outNama.innerText = "Nama: " + inputNama.value;
    outKategori.innerText = "Kategori: " + selectKategori.value;
    outPesan.innerText = "Pesan: " + textPesan.value;

    // Menampilkan kotak hasil (karena di CSS diatur display: none)
    boxHasil.style.display = "block";

    // Opsional: Membersihkan form setelah kirim
    formLapor.reset();
});
