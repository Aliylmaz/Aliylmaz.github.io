document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form verilerini al
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // localStorage'dan kullanıcıları al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // E-posta kontrolü
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
        alert("Bu e-posta zaten kullanılıyor. Lütfen farklı bir e-posta adresi girin.");
        return;
    }

    // Yeni kullanıcıyı ekle
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Kullanıcıyı hemen `currentUser` olarak kaydet
    localStorage.setItem("currentUser", JSON.stringify({ username, email, password }));

    // Başarılı kayıt mesajı
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");

    // Giriş sayfasına yönlendirme
    window.location.href = "login.html";
});
