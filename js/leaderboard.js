document.addEventListener("DOMContentLoaded", function () {
    const leaderboardList = document.getElementById("leaderboard-list");
    const backDashboard = document.getElementById("back-to-dashboard");

    // Liderlik Tablosunu Yükle
    function loadLeaderboard() {
        // LocalStorage'dan kullanıcıları al
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length === 0) {
            leaderboardList.innerHTML = "<li>Henüz bir skor kaydedilmedi.</li>";
            return;
        }

        // Kullanıcıları skorlara göre azalan sırada sırala
        const sortedUsers = users.sort((a, b) => (b.score || 0) - (a.score || 0));

        leaderboardList.innerHTML = ""; // Önceki verileri temizle

        // Sıralı listeyi oluştur
        sortedUsers.forEach((user, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${index + 1}. ${user.username}</span>
                <span>${user.score || 0} Puan</span>
            `;
            leaderboardList.appendChild(li);
        });
    }

    // Dashboard'a geri dönme
    backDashboard.addEventListener("click", () => {
        window.location.href = "dashboard.html"; // Dashboard sayfasına yönlendirme
    });

    // Sayfa yüklendiğinde liderlik tablosunu yükle
    loadLeaderboard();
});
