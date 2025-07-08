// Tambahan interaktif: scroll ke atas otomatis & notifikasi pembaca

document.addEventListener("DOMContentLoaded", function () {
  // Show welcome alert on first load
  setTimeout(() => {
    alert("Selamat datang! Scroll ke bawah untuk melihat panduan lengkap membuat web di GitHub.");
  }, 300);

  // Scroll button (opsional)
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑ Ke Atas";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 14px";
  scrollBtn.style.background = "#3498db";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50px";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
});
