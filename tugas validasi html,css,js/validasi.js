function validateForm(event) {
  event.preventDefault();
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var kelas = document.getElementById("kelas").value;
  var message = document.getElementById("message");

  if (nama.trim() == "" || nim.trim() == "" || kelas.trim() == "") {
    message.style.display = "block";
    message.textContent = "Semua kolom harus diisi!";
    return false;
  } else {
    message.style.display = "none";
    alert(
      "Data berhasil diverifikasi:\nNama: " +
        nama +
        "\nNIM: " +
        nim +
        "\nKelas: " +
        kelas
    );
    document.getElementById("myForm").reset();
    return true;
  }
}

document.getElementById("myForm").addEventListener("submit", validateForm);
