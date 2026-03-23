document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    let isValid = true;

    // Ad Soyad doğrulama
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        nameInput.classList.remove("is-invalid");
    }

    // E-posta doğrulama
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        isValid = false;
    } else {
        emailInput.classList.remove("is-invalid");
    }

    // Şifre doğrulama
    if (passwordInput.value.length < 6) {
        passwordInput.classList.add("is-invalid");
        isValid = false;
    } else {
        passwordInput.classList.remove("is-invalid");
    }

    // Şifre eşleşme doğrulama
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add("is-invalid");
        isValid = false;
    } else {
        confirmPasswordInput.classList.remove("is-invalid");
    }

    // Eğer tüm alanlar geçerliyse
    if (isValid) {
        alert("Kayıt başarılı!");
        // Burada kayıt işlemleri yapılabilir (ör. API çağrısı)
    }
});

// E-posta doğrulama fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}