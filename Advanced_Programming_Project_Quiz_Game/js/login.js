document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form verilerini al
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // localStorage'dan kullanıcıları al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kullanıcıyı bul ve şifreyi kontrol et
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        // Kullanıcı bilgilerini kaydet
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Başarılı giriş mesajı
        alert(`Giriş başarılı! Hoş geldiniz, ${user.username}.`);

        // Dashboard'a yönlendirme
        window.location.href = "dashboard.html";
    } else {
        alert("E-posta veya şifre hatalı. Lütfen tekrar deneyin.");
    }
});
