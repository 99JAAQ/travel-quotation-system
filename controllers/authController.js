const jwt = require('jsonwebtoken');
require('dotenv').config();

const mockUser = {
  id: "mockUserId",
  username: "mockUser",
  email: "mock@example.com",
  password: "$2b$10$R.cXhqg2/a1QZb9jA1a9kuhU9EyDa8A1MFF/iwf5QX9rf/PQw9DOW" // hashed password for "password"
};

exports.register = (req, res) => {
  // En un entorno real, guardarías el usuario en la base de datos
  res.status(201).json({ message: 'Usuario registrado correctamente', user: mockUser });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email === mockUser.email && bcrypt.compareSync(password, mockUser.password)) {
    const token = jwt.sign({ id: mockUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } else {
    res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
  }
};
