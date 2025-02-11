// Thêm các framework cần thiết
const express = require("express");
const cors = require("cors");

// Khởi tạo ứng dụng, một thể hiện của express
const app = express();

// Định nghĩa các middleware
app.use(cors());
app.use(express.json());

// Định nghĩa các route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// Xuất module app để có thể sử dụng ở file khác
module.exports = app;