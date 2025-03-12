document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".right2");
    let menu = document.querySelector(".dropdown-menu");
    let selectedOption = document.querySelector(".selected-option");
    let icon = document.querySelector(".right2 i");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        menu.classList.toggle("show-menu");
        icon.classList.toggle("rotate");
    });

    // Xử lý chọn option
    document.querySelectorAll(".dropdown-menu li").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn chặn click lan ra ngoài trước khi menu đóng

            selectedOption.textContent = this.textContent;
            menu.classList.remove("show-menu"); // Ẩn menu khi chọn xong
            icon.classList.remove("rotate"); // Xoay mũi tên về lại ban đầu

            // Tạo một sự kiện click giả trên body để đóng menu hoàn toàn
            setTimeout(() => {
                document.body.click();
            }, 100);
        });
    });

    // Ẩn dropdown khi click ra ngoài
    document.addEventListener("click", function () {
        menu.classList.remove("show-menu");
        icon.classList.remove("rotate");
    });
});
