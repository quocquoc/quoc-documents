// Hiện tại, các hiệu ứng chính được xử lý bằng CSS.
// File này có thể dùng cho các hiệu ứng JavaScript phức tạp hơn nếu cần.

// Ví dụ: Hiệu ứng scroll-triggered animations (nếu không dùng Intersection Observer API)
// document.addEventListener('scroll', function() {
//     const elements = document.querySelectorAll('.needs-animation');
//     elements.forEach(el => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//             el.classList.add('animate-in-view');
//         }
//     });
// });

console.log("Animation module loaded (nếu có).");