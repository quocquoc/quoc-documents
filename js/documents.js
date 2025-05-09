const sampleDocuments = [
    {
        id: "doc1",
        title: "Giới thiệu về AI Agent từ OpenAI",
        thumbnailImage: "assets/images/openai_building_agent.png", // Thay thế bằng hình ảnh thật
        htmlPath: "documents/openai_building_agent/index.html",
        description: "Tài liệu giới thiệu cơ bản về AI Agent, từ OpenAI",
        uploadDate: "2025-05-09"
    },
    {
        id: "doc2",
        title: "Hướng dẫn viết Prompt từ Google",
        thumbnailImage: "assets/images/google_prompt_engineering.png", // Thay thế bằng hình ảnh thật
        htmlPath: "documents/google_prompt_engineering/index.html", // Giả định bạn có document2
        description: "Khám phá các kỹ thuật viết Prompt hiệu quả và cách tối ưu hóa kết quả từ Google.",
        uploadDate: "2025-05-01"
    },
    // {
    //     id: "doc3",
    //     title: "JavaScript Thuần Cho Người Mới Bắt Đầu",
    //     thumbnailImage: "assets/images/doc3_thumb.jpg", // Thay thế bằng hình ảnh thật
    //     htmlPath: "documents/document3/index.html",
    //     description: "Học JavaScript từ những khái niệm cơ bản nhất, DOM manipulation và xử lý sự kiện.",
    //     uploadDate: "2024-06-01"
    // },
    // {
    //     id: "doc4",
    //     title: "Giới Thiệu Về Web Accessibility (WCAG)",
    //     thumbnailImage: "assets/images/doc4_thumb.jpg",
    //     htmlPath: "documents/document4/index.html",
    //     description: "Tìm hiểu về tầm quan trọng của khả năng truy cập web và các nguyên tắc WCAG.",
    //     uploadDate: "2024-06-10"
    // },
    // {
    //     id: "doc5",
    //     title: "Tối Ưu Hóa Hiệu Suất Website",
    //     thumbnailImage: "assets/images/doc5_thumb.jpg",
    //     htmlPath: "documents/document5/index.html",
    //     description: "Các kỹ thuật giúp tăng tốc độ tải trang và cải thiện trải nghiệm người dùng.",
    //     uploadDate: "2024-06-20"
    // },
    // {
    //     id: "doc6",
    //     title: "Làm Việc Với API trong JavaScript",
    //     thumbnailImage: "assets/images/doc6_thumb.jpg",
    //     htmlPath: "documents/document6/index.html",
    //     description: "Cách gửi request, nhận và xử lý dữ liệu từ các API bên ngoài sử dụng Fetch API.",
    //     uploadDate: "2024-07-01"
    // }
];

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

function createDocumentCard(doc, index) {
    const card = document.createElement('article');
    card.className = 'document-card';
    card.setAttribute('data-id', doc.id);
    // Gán custom property cho animation delay
    card.style.setProperty('--card-index', index);


    const link = document.createElement('a');
    link.href = doc.htmlPath;
    // link.target = "_blank"; // Mở trong tab mới nếu muốn

    const thumbnail = document.createElement('img');
    thumbnail.src = doc.thumbnailImage;
    thumbnail.alt = `Thumbnail cho ${doc.title}`;
    thumbnail.className = 'document-thumbnail';
    thumbnail.loading = 'lazy'; // Lazy loading cho hình ảnh

    const content = document.createElement('div');
    content.className = 'document-content';

    const title = document.createElement('h3');
    title.className = 'document-title';
    title.textContent = doc.title;

    const description = document.createElement('p');
    description.className = 'document-description';
    description.textContent = doc.description;

    const meta = document.createElement('p');
    meta.className = 'document-meta';
    meta.textContent = `Ngày đăng: ${formatDate(doc.uploadDate)}`;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(meta);

    link.appendChild(thumbnail);
    link.appendChild(content);
    card.appendChild(link);

    // Xử lý sự kiện click để điều hướng (nếu không dùng thẻ <a> trực tiếp)
    // card.addEventListener('click', () => {
    //     window.location.href = doc.htmlPath;
    // });

    return card;
}

function renderDocuments(documents) {
    const container = document.getElementById('document-list-container');
    if (!container) {
        console.error('Không tìm thấy container #document-list-container');
        return;
    }
    container.innerHTML = ''; // Xóa nội dung cũ

    // Tạo DocumentFragment để tối ưu hiệu suất render
    const fragment = document.createDocumentFragment();
    documents.forEach((doc, index) => {
        fragment.appendChild(createDocumentCard(doc, index));
    });
    container.appendChild(fragment);
}

// Khởi tạo khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    renderDocuments(sampleDocuments);
});