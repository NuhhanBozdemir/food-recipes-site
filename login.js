document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    let isValid = true;

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

    // Eğer tüm alanlar geçerliyse
    if (isValid) {
        alert("Giriş başarılı!");
        
    }
});

// E-posta doğrulama fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}