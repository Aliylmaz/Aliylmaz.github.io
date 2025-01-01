document.addEventListener("DOMContentLoaded", () => {
    const categoryBlocks = document.querySelectorAll(".category-block");

    categoryBlocks.forEach((block) => {
        block.addEventListener("click", () => {
            const categoryId = block.getAttribute("data-category-id"); // data-category-id değerini al
         
            localStorage.setItem("selectedCategoryId", categoryId); // ID'yi localStorage'a kaydet

            console.log("Seçilen kategori ID: ", categoryId);

            window.location.href = "quiz.html"; // Quiz sayfasına yönlendir
        });
    });
});
