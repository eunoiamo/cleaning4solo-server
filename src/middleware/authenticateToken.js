const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).send({ message: 'Token diperlukan' });
  }

  // Verifikasi sebagai JWT
  jwt.verify(token, process.env.JWT_SECRET, (jwtError, user) => {
    if (jwtError) {
      return res.status(403).send({ message: 'Token tidak valid atau telah kadaluarsa' });
    }
    req.user = user;
    next();
  });
}

// Fungsi untuk menghasilkan token
function generateToken(userId, role) {
  const secretKey = process.env.JWT_SECRET; // Gunakan variabel lingkungan untuk secret key
  const expiresIn = '4h'; // Durasi token
  return jwt.sign({ _id: userId, role }, secretKey, { expiresIn });
}

module.exports = { authenticateToken, generateToken };
