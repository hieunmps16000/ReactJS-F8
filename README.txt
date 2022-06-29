# Lesson: React-Dom
    <script crossorigin src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"></script> 

    ? Câu hỏi: 

        1. Tại sao phải sử dụng React-Dom?
        2. Tại sao lại tách React-Dom ra?
        3. Render UI


    => Trả lời:

        1. Để render React-Element ra trình duyệt. 
            React-Dom là càu nói giữa React và Dom

        2. Vì để giảm tải dung lượng cho thư viện React. 
            Ngoài React-Dom còn có React-Native

        3. Tạo thẻ div có id là root. 
            ReactDom.render(React-Element, Element-Container, callback

---------------------------------------------------------------------------------------------------------------------------------------------            
        
# lesson2: JSX

- JSX: Javascript XML
- JSX: dùng để viết html trong React
- Để dùng được JSX cần thông qua Babel
- Babel là 1 thư viện Javascript dùng để phân tích cú pháp và chuyển đổi cú pháp