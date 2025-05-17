document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật năm hiện tại trong copyright
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // (Tùy chọn) Thêm code cho menu mobile toggle nếu cần
    // const menuToggle = document.querySelector('.menu-toggle');
    // const nav = document.querySelector('header nav'); // Cần điều chỉnh selector
    // if (menuToggle && nav) {
    //     menuToggle.addEventListener('click', () => {
    //         nav.classList.toggle('active'); // Cần định nghĩa class .active trong CSS
    //     });
    // }
});