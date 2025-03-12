document.addEventListener("DOMContentLoaded", function () {
    let titleCate = document.querySelector(".title-cate");
    let contentCate = document.querySelector(".content-cate");
    let icon = document.querySelector(".title-cate i");

    titleCate.addEventListener("click", function () {
        // Toggle hiển thị danh sách
        contentCate.style.display = contentCate.style.display === "block" ? "none" : "block";
        // Xoay icon
        icon.classList.toggle("rotate");
    });
});
