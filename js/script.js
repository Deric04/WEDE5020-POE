// =========================================
// BAKES BY MK - JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Bakes by MK website loaded successfully.");

    // Product Search
    const searchInput = document.getElementById("product-search");
    const productCards = document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchTerm = searchInput.value.toLowerCase().trim();

            productCards.forEach(function (card) {

                const productName = card.querySelector("h3").textContent.toLowerCase();
                const productDescription = card.querySelector("p").textContent.toLowerCase();

                if (
                    productName.includes(searchTerm) ||
                    productDescription.includes(searchTerm)
                ) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});