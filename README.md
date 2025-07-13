# 📁 Express.js Advanced Features Assignment

This project is a Node.js + Express.js backend server that demonstrates advanced features including:

- ✅ File Upload with Cloudinary
- ✅ Centralized Error Handling
- ✅ Third-Party API Integration (Public APIs)
- ✅ File Type/Size Validation

---

## 🚀 Features

| Feature                          | Description                                                           |
| -------------------------------- | --------------------------------------------------------------------- |
| 📤 **File Upload**               | Uploads files to [Cloudinary](https://cloudinary.com/) using `multer` |
| 🛑 **Error Handling**            | Custom middleware to handle application-level errors                  |
| 🔌 **Third-Party API**           | Fetches public API data using `axios`                                 |
| ✅ **Validation**                | Validates file type (`jpg/png`) and file size (max 2MB) before upload |
| 🧠 **Logger Utility**            | Logs messages with timestamps via `utils/logger.js`                   |
| 🔐 **Environment Configuration** | Uses `dotenv` to manage API keys and config securely                  |

---

## 📁 Project Structure

```

project-root
src
│
├── index.js                     # Main server entry point
├── config/
│   └── cloudinary.js            # Cloudinary configuration
├── controllers/
│   ├── uploadController.js      # File upload logic
│   └── apiController.js         # Third-party API handler
├── middlewares/
│   ├── errorHandler.js          # Global error middleware
│   └── uploadMiddleware.js      # Multer setup for file upload
├── routes/
│   ├── uploadRoutes.js          # Upload routes
│   └── apiRoutes.js             # External API routes
├── utils/
│   ├── logger.js                # Logging utility
│   └── validateFile.js          # File type/size validation
├── uploads/                     # Temporary local file storage


```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone "repo url"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   ```env
   PORT=3000
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the server**

   ```bash
   npx nodemon src/index.js
   ```

---

## 🧪 API Endpoints

### 🔼 Upload File

```
POST /api/upload
```

- Accepts `multipart/form-data` with field name: `file`
- Returns Cloudinary-hosted image URL

### 🔽 Fetch Public APIs

```
GET /api/thirdparty
```

- Fetches data from: [https://api.publicapis.org/entries](https://api.publicapis.org/entries)

---
