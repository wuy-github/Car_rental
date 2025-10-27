Cau truc thu muc phan mem:
my-project/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Chứa hình ảnh, fonts,
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/          # CHỈ chứa các component TÁI SỬ DỤNG
│   │   ├── common/            # Các component chung (Header, Footer, Sidebar)
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── ui/                # Các component UI nhỏ (Button, Input, Modal)
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Card.jsx
│   │   │
│   │   └── CarCard.jsx        # Component cụ thể nhưng tái sử dụng
│   │
│   ├── layouts/             # Bố cục (layout) của trang
│   │   └── MainLayout.jsx     # Ví dụ: Layout có Header và Footer
│   │
│   ├── pages/               # Các "trang" hoàn chỉnh của bạn
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── CarDetailsPage.jsx
│   │
│   ├── hooks/               # Chứa các custom hooks (ví dụ: useAuth, useApi)
│   │   └── useDebounce.js
│   │
│   ├── services/            # Xử lý logic nghiệp vụ, gọi API
│   │   └── api.js
│   │
│   ├── utils/               # Các hàm tiện ích nhỏ (ví dụ: formatDate)
│   │   └── formatDate.js
│   │
│   ├── App.jsx              # Component gốc, thường dùng để set up routing
│   ├── index.css            # File CSS toàn cục (đã thêm Tailwind)
│   └── main.jsx             # Điểm vào (entry point) của ứng dụng
│
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js

