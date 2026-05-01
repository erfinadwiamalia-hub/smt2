
    const judul = document.getElementById("judul");
    const btn = document.getElementById("btnUbah");

    btn.addEventListener("click", function() {
      judul.innerText = "Berhasil Diubah!";
      judul.style.color = "white";
      document.body.style.backgroundColor = "#4CAF50";
    });

    // BAGIAN 2
    const form = document.getElementById("formLapor");
    const nama = document.getElementById("nama");
    const kategori = document.getElementById("kategori");
    const pesan = document.getElementById("pesan");

    const outNama = document.getElementById("outNama");
    const outKategori = document.getElementById("outKategori");
    const outPesan = document.getElementById("outPesan");
    const hasil = document.getElementById("hasil");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      if (nama.value.trim() === "") {
        alert("Nama wajib diisi!");
        return;
      }

      outNama.innerText = "Nama: " + nama.value;
      outKategori.innerText = "Kategori: " + kategori.value;
      outPesan.innerText = "Pesan: " + pesan.value;

      hasil.style.display = "block";
    });
