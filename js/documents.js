const sampleDocuments = [
    {
        id: "doc1",
        title: "Giới thiệu về AI Agent từ OpenAI",
        thumbnailImage: "assets/images/openai_building_agent.png",
        htmlPath: "documents/openai_building_agent/index.html",
        description: "Tài liệu giới thiệu cơ bản về AI Agent, từ OpenAI",
        uploadDate: "2025-05-09"
    },
    {
        id: "doc2",
        title: "Hướng dẫn viết Prompt từ Google",
        thumbnailImage: "assets/images/google_prompt_engineering.png",
        htmlPath: "documents/google_prompt_engineering/index.html",
        description: "Khám phá các kỹ thuật viết Prompt hiệu quả và cách tối ưu hóa kết quả từ Google.",
        uploadDate: "2025-05-01"
    },
    {
        id: "doc3",
        title: "Agents Companion",
        thumbnailImage: "assets/images/Agents-Companion-main.png",
        htmlPath: "documents/Agents-Companion-main/index.html",
        description: "Tương lai của AI là Agentic.",
        uploadDate: "2025-05-18"
    },
    {
        id: "doc4",
        title: "AI Agents",
        thumbnailImage: "assets/images/AIAgents-main.png",
        htmlPath: "documents/AIAgents-main/index.html",
        description: "AI Agents: Tiến Hóa, Kiến Trúc và Ứng Dụng Thực Tế",
        uploadDate: "2025-05-18"
    },
    {
        id: "doc5",
        title: "Building effective agents",
        thumbnailImage: "assets/images/building-effective-agents-main.png",
        htmlPath: "documents/building-effective-agents-main/index.html",
        description: "Xây dựng Agent (tác tử) hiệu quả",
        uploadDate: "2025-05-18"
    },
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