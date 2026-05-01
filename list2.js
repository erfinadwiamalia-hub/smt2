    const input = document.getElementById("inputTugas"); 
    const kategori = document.getElementById("kategori");
    const tombol = document.getElementById("tambahBtn");
    const list = document.getElementById("listTugas");

    tombol.addEventListener("click", function() {
        const teks = input.value;
        const pilihKategori = kategori.value;

        if (teks === "") {
            alert("Tugas tidak boleh kosong!");
            return;
        }

        const item = document.createElement("p");
        item.textContent = teks + " (" + pilihKategori + ")";

        if (pilihKategori === "Penting & Mendesak") {
            item.classList.add("penting-mendesak");
        } else if (pilihKategori === "Penting") {
            item.classList.add("penting");
        } else {
            item.classList.add("mendesak");
        }

        const hapusBtn = document.createElement("button");
        hapusBtn.textContent = "X";

        hapusBtn.addEventListener("click", function(e) {
            e.stopPropagation(); 
            item.remove();
        });

        item.addEventListener("click", function() {
            item.classList.toggle("selesai");
        });

        item.appendChild(hapusBtn);
        list.appendChild(item);

        input.value = "";
    });