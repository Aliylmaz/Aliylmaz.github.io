document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form verilerini al
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Şifre regexi
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // E-posta regexi (Gmail ve Hotmail kabul edilir)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;

    // localStorage'dan kullanıcıları al
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // E-posta kontrolü
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
        alert("Bu e-posta zaten kullanılıyor. Lütfen farklı bir e-posta adresi girin.");
        return;
    }

    // E-posta doğrulama
    if (!emailRegex.test(email)) {
        alert("Lütfen geçerli bir Gmail veya Hotmail adresi girin. Örnek: kullanici@gmail.com veya kullanici@hotmail.com");
        return;
    }

    // Şifre doğrulama
    if (!passwordRegex.test(password)) {
        alert("Şifreniz en az 8 karakter uzunluğunda olmalı, en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir.");
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
