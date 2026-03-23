const categories = [
    // Kahvaltı
    "kahvaltı", "menemen", "simit", "omlet", "tost", "poğaca", "krep", "çılbır", "kavurma", "zeytin", "peynir",

    // Ana Yemek
    "ana yemek", "karnıyarık", "fırın tavuk", "mantı", "et sote", "biber dolması", "taze fasulye", "kuru fasulye", "ızgara köfte", "sebze graten",
    "kuzu tandır", "kumpir", "sarma", "kısır", "döner", "beşamel soslu karnıyarık", "İskender", "fırında levrek", "tavuk şiş", "kuzu tandır",
    "börek", "sigara böreği", "lahmacun", "poğaça", "mücver", "çörek", "pide", "balık buğulama",

    // Tatlılar
    "tatlılar", "baklava", "dondurma", "güllaç", "sütlaç", "pankek", "kadayıf", "çikolatalı kek", "şekerpare", "tiramisu", "cheesecake", "fırın sütlaç",
    "kumpir", "kurabiye", "bisküvili pasta", "keki", "şekerpare", "çiğ börek", "zeytinyağlı enginar", "falafel", "kabak tatlısı", "revani",

    // Çorbalar
    "çorbalar", "kabak çorbası", "kremalı mantar çorbası", "mercimek çorbası", "pirinç çorbası", "yayla çorbası", "domates çorbası", "tarhana çorbası",
    "sebze çorbası", "beyran çorbası", "tavuk çorbası", "yeşil mercimek çorbası", "soğan çorbası", "kremalı mantar çorbası", "bal kabağı çorbası",

    // Makarnalar
    "makarnalar", "beşamel soslu penne", "ıspanak soslu penne", "köfteli penne", "kremalı körili penne", "peynirli penne", "spagetti", "fettucine",
    "tagliatelle", "makarna salatası", "gnocchi", "spaghetti bolognese", "carbonara", "penne arrabbiata", "makarna sosları", "vejetaryen makarna",

    // Salatalar
    "salatalar", "balık soslu roka", "brüksel lahanası salatası", "çiğ brokoli salatası", "kış piyazı", "lolo rosso", "nar ekşili nohut salatası", "mevsim salata",
    "kısır", "Akdeniz salata", "zeytinyağlı enginar salatası", "kapya biber salatası", "yeşil salata", "ton balıklı salata", "patates salatası",
    "cevizli havuç salatası", "taze fasulye salatası", "kısır", "kavunlu beyaz peynir salatası", "avokadolu salata",

    // Pizza
    "margarita pizza", "peynirli pizza", "sucuklu pizza", "balıklı pizza", "sebzeli pizza", "vejetaryen pizza", "soğanlı pizza", "kıymalı pizza",

    // Diğerleri
    "balık ızgara", "somon", "levrek", "lüfer", "kuzu tandır", "fırında tavuk", "mantı", "güveç", "pizza", "burger", "deniz ürünleri", "fırın köfte"
];

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

// Arama kutusu için öneriler
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length > 0) {
        suggestionsBox.style.display = 'block'; // öneri kutusunu göster
        suggestionsBox.innerHTML = ''; // önceki önerileri temizle
        categories.filter(category => category.includes(query)).forEach(suggestion => {
            const link = document.createElement("a");
            link.href = `#`; // yönlendirme kaldırıldı
            link.textContent = suggestion.charAt(0).toUpperCase() + suggestion.slice(1);
            suggestionsBox.appendChild(link);
        });
    } else {
        suggestionsBox.style.display = 'none'; // öneri kutusunu gizle
    }
});

// Öneri tıklama işlemi
suggestionsBox.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() === "a") {
        const suggestionText = event.target.textContent;
        searchInput.value = suggestionText;
        suggestionsBox.style.display = 'none';
    }
});

// Arama formu gönderme işlemi
document.querySelector('.search-box').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    // Kategoriye yönlendirme
    if (["kahvaltı", "menemen", "simit", "omlet", "tost", "poğaca", "krep"].some(k => query.includes(k))) {
        window.location.href = "kahvalti.html";
    } else if (["ana yemek", "karnıyarık", "fırın tavuk", "mantı", "et sote", "biber dolması", "taze fasulye", "kuru fasulye", "ızgara köfte", "sebze graten"].some(k => query.includes(k))) {
        window.location.href = "anayemek.html";
    } else if (["tatlılar", "baklava", "dondurma", "güllaç", "sütlaç", "pankek", "kadayıf"].some(k => query.includes(k))) {
        window.location.href = "tatlilar.html";
    } else if (["çorbalar", "kabak", "kremalı mantar", "mercimek", "mısır", "pirinç", "pırasa"].some(k => query.includes(k))) {
        window.location.href = "corbalar.html";
    } else if (["makarnalar", "beşamel soslu", "ıspanak soslu", "köfteli", "kremalı körili", "kremalı", "peynirli penne"].some(k => query.includes(k))) {
        window.location.href = "makarnalar.html";
    } else if (["salatalar", "balık soslu roka", "brüksel", "çiğ brokoli", "kış piyazı", "lolo rosso", "nar ekşili nohut"].some(k => query.includes(k))) {
        window.location.href = "salatalar.html";
    } else {
        alert("Aradığınız tarif ya da kategori bulunamadı. Lütfen farklı bir anahtar kelime deneyin.");
    }
});
