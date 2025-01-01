
// DOM Elemanlarını Seç
const categoryButton = document.getElementById("go-to-categories");
const leaderboardButton = document.getElementById("go-to-leaderboard");
const usernameElement = document.getElementById("username");

// Kullanıcı bilgisi kontrolü (LocalStorage)
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

   
   
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        alert("Kullanıcı adı bulunamadı, giriş ekranına yönlendiriliyorsunuz.");
        window.location.href = "login.html";
    }



    // Kullanıcı adını ekrana yazdır
    usernameElement.textContent = username;

    // Kategori ve Liderlik Tablosu yönlendirmeleri
    categoryButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Kategori seçim ekranına yönlendirme
    });

    leaderboardButton.addEventListener("click", () => {
        window.location.href = "leaderboard.html"; // Liderlik tablosuna yönlendirme
    });
});