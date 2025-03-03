  import jwt from 'jsonwebtoken';
  function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res
      .status(401)
      .json({ message: "Token d'authentification manquant" });
  }
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token d'authentification invalide" });
    }
    req.user = user;
    next();
  });
}
export default authenticateToken;
