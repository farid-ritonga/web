document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (event) {
    // Hapus kelas 'section-show' dari semua section
    document.querySelectorAll("section").forEach((section) => section.classList.remove("section-show"));

    // Menambahkan kelas 'section-show' ke section yang dipilih
    const targetId = item.getAttribute("href").substring(1); // Mengambil ID target dari href
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("section-show");
    }
  });
});
