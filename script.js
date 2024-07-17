document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "La vie est ce qui se passe quand vous êtes occupé à faire d'autres projets. - John Lennon",
        "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. - Albert Schweitzer",
        "Ne pleurez pas parce que c'est fini, souriez parce que c'est arrivé. - Dr. Seuss",
        "Vous devez être le changement que vous voulez voir dans le monde. - Mahatma Gandhi"
    ];
    var generateBtn = document.getElementById("generateBtn");
    var quoteDisplay = document.getElementById("quote");

    generateBtn.addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });
});
