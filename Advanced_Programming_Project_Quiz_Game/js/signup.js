document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form verilerini al
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

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

    // Başarılı kayıt mesajı
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");

    // Giriş sayfasına yönlendirme
    window.location.href = "login.html";
});
