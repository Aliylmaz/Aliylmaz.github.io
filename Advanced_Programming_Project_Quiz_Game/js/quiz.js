// Base API URL
const API_BASE_URL = "https://opentdb.com/api.php?amount=50&category=";

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timerInterval;
let questions = [];

// DOM Elements
const quizContainer = document.getElementById("quiz-container");

// Create Quiz Structure
function createQuizStructure() {
    quizContainer.innerHTML = `
        <div class="header">
            <div class="stats-left">
                <p id="correct-stats">✔️ 0</p>
                <p id="wrong-stats">❌ 0</p>
            </div>
            <div class="stats-right">
                <p id="timer">⏱️ 00:00</p>
            </div>
        </div>
        <div class="question-section">
            <p id="question-text"></p>
        </div>
        <div class="options-section"></div>
        <div class="footer">
            <p id="score-display">Puan: 0</p>
        </div>
    `;
}



function fetchWithTimeout(url, options = {}, timeout = 5000) { // 10 saniyelik varsayılan timeout
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("İstek zaman aşımına uğradı. Lütfen tekrar deneyin."));
        }, timeout);

        fetch(url, options)
            .then((response) => {
                clearTimeout(timer);
                resolve(response);
            })
            .catch((err) => {
                clearTimeout(timer);
                reject(err);
            });
    });
}

function saveScore(finalScore) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        alert("Kullanıcı oturumu mevcut değil. Skor kaydedilemedi.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.email === currentUser.email);

    if (userIndex === -1) {
        alert("Kullanıcı bulunamadı. Skor kaydedilemedi.");
        return;
    }

    // Skoru güncelle ve toplam skoru sıfırın altına düşürme
    users[userIndex].score = Math.max(0, (users[userIndex].score || 0) + finalScore);

    // Güncellenen veriyi kaydet
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

    alert(`Sonuç kaydedildi! Yeni toplam skorunuz: ${users[userIndex].score}`);
}


// Fetch Questions
async function fetchQuestions(categoryId) {
    try {
        const response = await fetchWithTimeout(`${API_BASE_URL}${categoryId}`);
        if (!response.ok) {
            if (response.status === 429) {
                throw new Error("Çok fazla istek gönderildi. Lütfen birkaç saniye bekleyip tekrar deneyin.");
            }
            throw new Error("API'den sorular alınamadı.");
        }
        const data = await response.json();
        questions = data.results.map((item) => ({
            question: item.question,
            options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            correctAnswer: item.correct_answer,
        }));
        if (questions.length === 0) {
            throw new Error("Seçilen kategoride soru bulunamadı.");
        }
    } catch (error) {
        alert(`Hata: ${error.message}`);
        console.error(error);
    }
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const optionsSection = document.querySelector(".options-section");

    questionText.innerHTML = currentQuestion.question; // Soruyu ekle
    optionsSection.innerHTML = ""; // Önceki seçenekleri temizle

    // Şıkları oluştur
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => checkAnswer(option, currentQuestion.correctAnswer));
        optionsSection.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedOption, correctOption) {
    const options = document.querySelectorAll(".option-button");
    options.forEach((button) => {
        if (button.textContent === correctOption) {
            button.classList.add("correct");
        } else if (button.textContent === selectedOption) {
            button.classList.add("wrong");
        }
        button.disabled = true; // Şıkları kilitle
    });

    if (selectedOption === correctOption) {
        score += 20; // Doğru cevap: +20 puan
        correctAnswers++;
    } else {
        score -= 5; // Yanlış cevap: -5 puan
        wrongAnswers++;
    }

    updateStats();

    // 3 saniye sonra sonraki soruya geç
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Update Stats
function updateStats() {
    document.getElementById("correct-stats").textContent = `✔️ ${correctAnswers}`;
    document.getElementById("wrong-stats").textContent = `❌ ${wrongAnswers}`;
    document.getElementById("score-display").textContent = `Puan: ${score}`;
}

function showResults() {
    clearInterval(timerInterval);

    // Kullanıcıya sonuçları göster
    const questionSection = document.querySelector(".question-section");
    const optionsSection = document.querySelector(".options-section");
    const footer = document.querySelector(".footer");

    questionSection.innerHTML = `
        <h2>Quiz Tamamlandı!</h2>
        <p>Toplam Puan: ${score}</p>
        <p>Doğru: ${correctAnswers} | Yanlış: ${wrongAnswers}</p>
    `;

    optionsSection.innerHTML = "";
    footer.innerHTML = `
        <button id="return-to-dashboard">Ana Sayfaya Dön</button>
    `;

    // Skoru kaydet
    saveScore(score);

    // Ana sayfaya dönme işlemi
    document.getElementById("return-to-dashboard").addEventListener("click", () => {
        window.location.href = "dashboard.html"; // Dashboard sayfasına yönlendir
    });
}





// Start Timer
function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timer").textContent = `⏱️ ${formatTime(seconds)}`;
    }, 1000);
}

// Format Time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    startTimer();
    loadQuestion();
}

// On Page Load
document.addEventListener("DOMContentLoaded", async () => {
    createQuizStructure();

    const selectedCategoryId = localStorage.getItem("selectedCategoryId");
    if (!selectedCategoryId) {
        alert("Kategori seçilmedi! Ana sayfaya dönüyorsunuz.");
        window.location.href = "index.html";
        return;
    }

    await fetchQuestions(selectedCategoryId);
    if (questions.length > 0) {
        startQuiz();
    } else {
        alert("Quiz başlatılamıyor, soru bulunamadı.");
    }
});
