// DOM Elemanlarını Seç
const categoryButton = document.getElementById("go-to-categories");
const leaderboardButton = document.getElementById("go-to-leaderboard");
const usernameElement = document.getElementById("username");

const logoutButton = document.getElementById("logout-button");

// Kullanıcı bilgisi kontrolü (LocalStorage)
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // currentUser'ı JSON olarak al

    if (currentUser && currentUser.username) {
        // Kullanıcı adını ekrana yazdır
        usernameElement.textContent = currentUser.username;
    } else {
        alert("Kullanıcı adı bulunamadı, giriş ekranına yönlendiriliyorsunuz.");
        window.location.href = "login.html";
    }

    // Kategori ve Liderlik Tablosu yönlendirmeleri
    categoryButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Kategori seçim ekranına yönlendirme
    });

    leaderboardButton.addEventListener("click", () => {
        window.location.href = "leaderboard.html"; // Liderlik tablosuna yönlendirme
    });

    // Çıkış yapma işlemi
    document.getElementById("logout-button").addEventListener("click", () => {
        // localStorage temizle
        localStorage.removeItem("currentUser");

        // Login sayfasına yönlendirme
        window.location.href = "login.html";
    });


});
