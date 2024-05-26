// Définition du schéma utilisateur
import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcryptjs.genSalt(10)
      .then((salt) => {
        return bcryptjs.hash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next();
  }
});

export default model('User', userSchema);
