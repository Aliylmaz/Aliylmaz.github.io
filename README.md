

```markdown
# 🎯 Bilgi Yarışması Uygulaması (Quiz App)

Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilmiş tamamen tarayıcı tabanlı bir **bilgi yarışması (quiz) platformudur**. Kullanıcılar farklı kategorilerde soruları cevaplayarak puan toplayabilir, liderlik tablosunda sıralamaya girebilir ve başarılarını takip edebilir.

---

## 🚀 Proje Hakkında

Proje, temel olarak aşağıdaki modüllerden oluşmaktadır:

- **Kullanıcı Kayıt ve Giriş Sistemi**
- **Kategori Bazlı Quiz Oyun Yapısı**
- **Zamanlayıcı (Timer) Fonksiyonu**
- **Puanlama ve Skor Takibi**
- **Liderlik Tablosu (Leaderboard)**
- **LocalStorage Tabanlı Veri Saklama (API ve veritabanı kullanmadan)**

---

## 🧩 Kullanılan Teknolojiler

| Alan             | Teknoloji                 |
|------------------|---------------------------|
| Frontend         | HTML, CSS, JavaScript     |
| Stil             | Responsive CSS             |
| Veri Yönetimi    | `localStorage`            |
| API              | [OpenTDB](https://opentdb.com/) (Soru verisi) |

---

## 📦 Özellikler

### 🧍‍♂️ Kullanıcı Sistemi

- `signup.html`: Yeni kullanıcı kaydı (email, username, password doğrulamalı)
- `login.html`: Giriş ekranı (doğrulama sonrası kullanıcıyı tanımlar)
- `dashboard.html`: Giriş yapan kullanıcının adıyla karşılama

### ❓ Quiz Modülü

- 50 adet rastgele API'den çekilen soru
- Doğru cevap = +20 puan, Yanlış cevap = -5 puan
- Toplam skor güncellemesi ve kaydı
- Timer ile geçen süre takibi
- Aktif soru sayısı takibi (örneğin: 15/50)

### 🏆 Liderlik Tablosu

- En yüksek skorlara göre sıralama
- LocalStorage tabanlı kayıt ve güncelleme
- Aynı kullanıcı için skorların birikimli şekilde güncellenmesi

---

## 📁 Proje Yapısı

```
📁 project-root/
├── index.html
├── login.html
├── signup.html
├── dashboard.html
├── quiz.html
├── leaderboard.html
│
├── css/
│   ├── style.css
│   ├── dashboard.css
│   └── quiz.css
│
├── js/
│   ├── login.js
│   ├── signup.js
│   ├── dashboard.js
│   ├── quiz.js
│   └── leaderboard.js
│
├── icons/ (kategori ikonları)
└── README.md
```

---

## 🛠 Kurulum ve Kullanım

### 1. Klonlayın

```bash
git clone https://github.com/kullaniciadi/quiz-app.git
cd quiz-app
```

### 2. Tarayıcıda Açın

`index.html` dosyasını doğrudan bir tarayıcıda açarak uygulamayı başlatabilirsiniz.

> **Not**: GitHub Pages üzerinden yayınlamak için projenizi GitHub'a yükleyin ve `index.html` ana sayfa olarak ayarlayın.

---

## 🔐 Güvenlik ve Sınırlandırmalar

- Tüm kullanıcı verileri sadece tarayıcı belleğinde (`localStorage`) tutulur.
- Şifre doğrulaması, düzenli ifadelerle yapılır.
- Aynı e-posta adresiyle birden fazla hesap oluşturulamaz.
- Uygulama dış dünyaya veri göndermez.

---

## 🖼 Görseller

### Dashboard Ekranı

![dashboard](./screenshots/dashboard.png)

### Quiz Ekranı

![quiz](./screenshots/quiz.png)

### Liderlik Tablosu

![leaderboard](./screenshots/leaderboard.png)

---

## 👨‍💻 Geliştirici

**Ali Yılmaz**  
Bilgisayar Mühendisliği 3. Sınıf  
Fatih Sultan Mehmet Vakıf Üniversitesi  

---

## 🌐 Yayın

GitHub Pages ile yayına almak isterseniz:

- Reponuzu açın → `Settings > Pages` sekmesine gidin.
- `main` branch'ten `root` klasörü seçin.
- URL’niz: `https://kullaniciadi.github.io/quiz-app/`

---

## 📃 Lisans

MIT Lisansı. Dilediğiniz gibi kullanabilir ve geliştirebilirsiniz.

---


