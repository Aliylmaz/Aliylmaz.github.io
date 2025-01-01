document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const categoryButton = document.getElementById("go-to-categories");
    const leaderboardButton = document.getElementById("go-to-leaderboard");
    const usernameElement = document.getElementById("username");

    if (!categoryButton || !leaderboardButton || !usernameElement) {
        console.error("Bir veya daha fazla DOM elemanı bulunamadı!");
        return;
    }

    if (currentUser) {
        document.getElementById("username").textContent = currentUser.username;
    } else {
        alert("Kullanıcı adı bulunamadı, giriş ekranına yönlendiriliyorsunuz.");
        window.location.href = "login.html";
    }

    categoryButton.addEventListener("click", () => {
        window.location.href = "/html/index.html";
    });

    leaderboardButton.addEventListener("click", () => {
        window.location.href = "/html/leaderboard.html";
    });
});
