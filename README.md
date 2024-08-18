# 🏕️ Camps Review Site

## 🌟 Overview
**Camps Review Site** is a full-stack web application that allows users to explore and share reviews of camps from around the world. Registered users can log in to contribute by adding new camps and writing reviews. Built with modern web technologies, this application leverages **Node.js**, **Express.js**, **MongoDB**, and **Cloudinary** to provide a seamless and secure user experience.

## 🚀 Features
- **🔐 User Authentication**: Users can register and log in to access site features. Only authenticated users can submit reviews or add new camps.
- **📝 Camp Reviews**: Browse and read reviews of various camps. Registered users can contribute their own reviews.
- **🏕️ Add New Camps**: Authenticated users can add new camps, complete with image uploads securely stored in Cloudinary.
- **🔒 Security**: The application implements comprehensive security measures to protect against common vulnerabilities like code injection.
- **💾 Database Management**: **MongoDB** is utilized to efficiently store user data, reviews, and camp details.
- **📷 Image Storage**: Images uploaded by users are securely managed and stored using **Cloudinary**.

## 🛠️ Technologies Used
- **Frontend**: ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript**, **HTML**, **CSS**
- **Backend**: ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js**, ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white) **Express.js**
- **Database**: ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB**
- **Image Storage**: ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) **Cloudinary**
- **Authentication and Security**:
  - **Express Router**
  - **Express Session**
  - **Flash Messages**
  - **Cookies**
  - **Input Validation and Sanitization**

## 📦 Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/camps-review-site.git
    cd camps-review-site
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the root of the project.
    - Add the following environment variables:
    ```plaintext
    MONGODB_URI=<Your MongoDB connection string>
    CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
    CLOUDINARY_API_KEY=<Your Cloudinary API key>
    CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
    SESSION_SECRET=<Your session secret>
    ```

4. **Run the Application**:
    ```bash
    npm start
    ```
    - Open your browser and navigate to `http://localhost:3000`.

## 💡 Usage
- **🔑 Register/Login**: Create an account or log in to access all features of the site.
- **🔍 Browse Reviews**: Explore reviews of camps from around the world.
- **✏️ Submit Reviews**: After logging in, share your experiences by writing reviews for camps.
- **➕ Add Camps**: Contribute by adding new camps, complete with descriptions and images.
- **🔐 Security**: Your data is protected with robust security measures implemented in the application.

## 🔒 Security Measures
- **Express Session and Cookies**: Secure session management using **Express Session** and cookies.
- **Input Validation**: All inputs are thoroughly validated and sanitized to prevent malicious attacks.
- **Flash Messages**: Enhance the user experience with flash messages, keeping users informed about their actions.

## 🤝 Contributing
Contributions are welcome! To contribute:
- **Fork the repository**.
- **Create a new branch** (`git checkout -b feature-branch`).
- **Make your changes** and commit them (`git commit -m 'Add new feature'`).
- **Push to the branch** (`git push origin feature-branch`).
- **Open a pull request** with a detailed description of your changes.

Please ensure all new code is well-documented and thoroughly tested.

## 📜 License
This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## 🙌 Acknowledgments
- **Express.js** - A robust backend framework.
- **MongoDB** - A flexible NoSQL database solution.
- **Cloudinary** - For seamless image storage and management.
- **Node.js** - The server-side environment powering the application.
- **Security Best Practices** - For guiding the implementation of secure coding practices.

---

This `README.md` provides a comprehensive guide to understanding, installing, and contributing to the Camps Review Site project.
