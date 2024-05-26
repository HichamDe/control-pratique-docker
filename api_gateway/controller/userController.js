import User from '../model/user.js';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

class UserController {
  static register(req, res) {
    const { username, password } = req.body;

    User.findOne({ username })
      .then(existingUser => {
        if (existingUser) {
          return res
            .status(409)
            .json({ message: "Nom d'utilisateur déjà utilisé" });
        }

        const newUser = new User({ username, password });
        return newUser.save();
      })
      .then(() => {
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({
          message:
            "Une erreur est survenue lors de l'enregistrement de l'utilisateur " +
            error,
        });
      });
  }

  static login(req, res) {
    const { username, password } = req.body;
    User.findOne({ username })
      .then(user => {
        if (!user) {
          return res
            .status(401)
            .json({ message: "Nom d'utilisateur non trouvee" });
        }
        return bcryptjs.compare(password, user.password).then(isMatch => {
          if (!isMatch) {
            return res
              .status(401)
              .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
          }
          const token = jsonwebtoken.sign({ userId: user._id }, 'secret', {
            expiresIn: '1h',
          });

          res.json({ message: "Logged In", token });
        });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({
          message: "Une erreur est survenue lors de l'authentification",
        });
      });
  }

  static protectedRoute(req, res) {
    res.json({ message: 'Accès autorisé' });
  }
}

export default UserController;
