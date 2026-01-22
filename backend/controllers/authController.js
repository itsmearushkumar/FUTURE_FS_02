const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const admin = require("../config/admin");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email !== admin.email || password !== admin.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "1d" }
  );

  res.json({ token });
};
