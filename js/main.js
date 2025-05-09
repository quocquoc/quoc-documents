document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật năm hiện tại cho footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Logic tìm kiếm (đơn giản, phía client)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(event) {
            const searchTerm = event.target.value.toLowerCase();
            const filteredDocuments = sampleDocuments.filter(doc => {
                return doc.title.toLowerCase().includes(searchTerm) ||
                       doc.description.toLowerCase().includes(searchTerm);
            });
            renderDocuments(filteredDocuments); // Gọi lại hàm render từ documents.js
        });
    }

    // (Tùy chọn) Logic cho mobile menu nếu có
    // const mobileMenuButton = document.getElementById('mobile-menu-toggle');
    // const navMenu = document.querySelector('.main-navigation');
    // if (mobileMenuButton && navMenu) {
    //     mobileMenuButton.addEventListener('click', () => {
    //         navMenu.classList.toggle('active');
    //         mobileMenuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    //     });
    // }

    // Các logic chung khác cho trang chủ có thể thêm vào đây
    console.log("Trang Quoc's Documents đã tải xong!");
});