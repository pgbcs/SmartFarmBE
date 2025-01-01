const { Sequelize } = require('sequelize');
require('dotenv').config();

// Khởi tạo Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql', // hoặc 'postgres', 'sqlite', 'mssql' tùy vào cơ sở dữ liệu bạn sử dụng
});

// Kiểm tra kết nối
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Kết nối đến cơ sở dữ liệu thành công!');
  } catch (error) {
    console.log('đi vào đây');
    console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
  }
}

testConnection();

module.exports = sequelize;
