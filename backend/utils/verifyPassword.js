const bcrypt = require('bcrypt');

// Hàm hash password
async function hashPassword(password) {
  try {
    const saltRounds = 10; // Độ phức tạp của salt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Lỗi khi hash password:', error);
    throw error;
  }
}

// Hàm kiểm tra password với hash
async function verifyPassword(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Lỗi khi verify password:', error);
    throw error;
  }
}

module.exports = { hashPassword, verifyPassword };