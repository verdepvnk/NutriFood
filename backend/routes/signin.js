var connection = require("../db");
var express = require("express");
var router = express.Router();

require("dotenv").config();

const jwt = require("jsonwebtoken");

// router.get("/", function (req, res) {
//   res.send("OK");
// });

router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  connection.query(
    "SELECT  * FROM users WHERE email = ? AND senha = ?",
    [email, senha],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "An error occurred" }); // Enviar um status de erro em caso de falha na consulta
      } else {
        if (results.length > 0) {
          const token = jwt.sign({ email }, process.env.SECRET, {
            expiresIn: 300,
          });
          res.set("x-access-token", token);
          return res.json({ auth: true, token: token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    }
  );
});

module.exports = router;

// const bcrypt = require("bcrypt");
//   const hashedPassword = await bcrypt.hash(senha, 10);
// require("dotenv-safe").config();