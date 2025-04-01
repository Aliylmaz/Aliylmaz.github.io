# Quiz Platform Projesi

Bu proje, Fatih Sultan Mehmet Vakıf Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi Ali Yılmaz tarafından geliştirilmiştir. Kullanıcıların farklı kategorilerde bilgi seviyelerini test edebileceği, puan toplayarak liderlik tablosunda sıralamaya girebileceği interaktif bir quiz oyunudur. Proje HTML, CSS ve JavaScript teknolojileriyle geliştirilmiş; veri yönetimi ise localStorage kullanılarak sağlanmıştır.

---

## Özellikler

- Kullanıcı kayıt ve giriş sistemi
- Kategori seçimi ve soruların rastgele gelmesi
- Zamanlayıcı ile quiz takibi
- Doğru ve yanlış cevap takibi
- Puanlama sistemi (Doğru: +20, Yanlış: -5)
- Liderlik tablosu
- Kullanıcı oturum takibi ve çıkış butonu
- Skor kaydetme ve güncelleme

---

## Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Veri Depolama:** LocalStorage (tarayıcı bazlı veri tutma)
- **API:** [Open Trivia DB](https://opentdb.com) üzerinden rastgele soru çekme

---

## Ekranlar & Sayfalar

### 1. Anasayfa (index.html)
- Proje tanıtımı
- "Quiz'e Başla" butonuyla login ekranına yönlendirme

### 2. Kayıt Sayfası (signup.html)
- Yeni kullanıcı kaydı
- E-posta regex kontrolü (@gmail.com veya @hotmail.com)
- Güvenli şifre kontrolü (regex ile)

### 3. Giriş Sayfası (login.html)
- Kullanıcı girişi
- Bilgiler localStorage ile doğrulanır

### 4. Dashboard (dashboard.html)
- Kullanıcıya hoş geldiniz mesajı
- Kategori seçimi ve liderlik tablosuna erişim butonları
- Çıkış (Logout) butonu

### 5. Quiz Sayfası (quiz.html)
- Soruların listelendiği ekran
- Zamanlayıcı, doğru/yanlış cevap istatistikleri
- Şık seçimi ve skor hesaplama

### 6. Liderlik Tablosu (leaderboard.html)
- LocalStorage'dan skorları alır ve sıralar
- En yüksek skora göre listeleme yapar

---

## Proje Dizin Yapısı

```bash
📁 Advanced_Programming_Project_Quiz_Game/
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
├── icons/                 # Kategori ikonları klasörü
│
└── README.md            # Proje dokümantasyonu
```

---

## Kurulum ve Kullanım

1. Bu repoyu GitHub'dan klonlayın:
   ```bash
   git clone https://github.com/Aliylmaz/Aliylmaz.github.io.git
   ```

2. Tarayıcıda `index.html` dosyasını açarak başlayabilirsiniz.

> Not: Proje sadece frontend teknolojileriyle geliştirildiği için ek sunucu kurulumuna gerek yoktur.

---

## Geliştirici

**Ali Yılmaz**  
Bilgisayar Mühendisliği 3. Sınıf Öğrencisi  
Fatih Sultan Mehmet Vakıf Üniversitesi

LinkedIn: [Ali Yılmaz](https://www.linkedin.com/in/ali-yilmaz)  
GitHub: [github.com/Aliylmaz](https://github.com/Aliylmaz)

---

## Lisans

Bu proje sadece eğitim amacıyla geliştirilmiştir. Herhangi bir ticari kullanımda geliştiricinin izni gereklidir.

---

## Teşekkür
- [OpenTriviaDB](https://opentdb.com) API hizmeti için
- HTML/CSS & JS topluluklarından edindiğim bilgiler için

# Quiz Platform Projesi

Bu proje, Fatih Sultan Mehmet Vakıf Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi Ali Yılmaz tarafından geliştirilmiştir. Kullanıcıların farklı kategorilerde bilgi seviyelerini test edebileceği, puan toplayarak liderlik tablosunda sıralamaya girebileceği interaktif bir quiz oyunudur. Proje HTML, CSS ve JavaScript teknolojileriyle geliştirilmiş; veri yönetimi ise localStorage kullanılarak sağlanmıştır.

---

## Özellikler

- Kullanıcı kayıt ve giriş sistemi
- Kategori seçimi ve soruların rastgele gelmesi
- Zamanlayıcı ile quiz takibi
- Doğru ve yanlış cevap takibi
- Puanlama sistemi (Doğru: +20, Yanlış: -5)
- Liderlik tablosu
- Kullanıcı oturum takibi ve çıkış butonu
- Skor kaydetme ve güncelleme

---

## Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Veri Depolama:** LocalStorage (tarayıcı bazlı veri tutma)
- **API:** [Open Trivia DB](https://opentdb.com) üzerinden rastgele soru çekme

---

## Ekranlar & Sayfalar

### 1. Anasayfa (index.html)
- Proje tanıtımı
- "Quiz'e Başla" butonuyla login ekranına yönlendirme

### 2. Kayıt Sayfası (signup.html)
- Yeni kullanıcı kaydı
- E-posta regex kontrolü (@gmail.com veya @hotmail.com)
- Güvenli şifre kontrolü (regex ile)

### 3. Giriş Sayfası (login.html)
- Kullanıcı girişi
- Bilgiler localStorage ile doğrulanır

### 4. Dashboard (dashboard.html)
- Kullanıcıya hoş geldiniz mesajı
- Kategori seçimi ve liderlik tablosuna erişim butonları
- Çıkış (Logout) butonu

### 5. Quiz Sayfası (quiz.html)
- Soruların listelendiği ekran
- Zamanlayıcı, doğru/yanlış cevap istatistikleri
- Şık seçimi ve skor hesaplama

### 6. Liderlik Tablosu (leaderboard.html)
- LocalStorage'dan skorları alır ve sıralar
- En yüksek skora göre listeleme yapar

---

## Proje Dizin Yapısı

```bash
📁 Advanced_Programming_Project_Quiz_Game/
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
├── icons/                 # Kategori ikonları klasörü
│
└── README.md            # Proje dokümantasyonu
```

---

## Kurulum ve Kullanım

1. Bu repoyu GitHub'dan klonlayın:
   ```bash
   git clone https://github.com/Aliylmaz/Aliylmaz.github.io.git
   ```

2. Tarayıcıda `index.html` dosyasını açarak başlayabilirsiniz.

> Not: Proje sadece frontend teknolojileriyle geliştirildiği için ek sunucu kurulumuna gerek yoktur.

---

## Geliştirici

**Ali Yılmaz**  
Bilgisayar Mühendisliği 3. Sınıf Öğrencisi  
Fatih Sultan Mehmet Vakıf Üniversitesi

LinkedIn: [Ali Yılmaz](https://www.linkedin.com/in/ali-yilmaz)  
GitHub: [github.com/Aliylmaz](https://github.com/Aliylmaz)

---

## Lisans

Bu proje sadece eğitim amacıyla geliştirilmiştir. Herhangi bir ticari kullanımda geliştiricinin izni gereklidir.

---

## Teşekkür
- [OpenTriviaDB](https://opentdb.com) API hizmeti için
- HTML/CSS & JS topluluklarından edindiğim bilgiler için

