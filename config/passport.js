const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
require('dotenv').config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // Aquí puedes buscar el usuario en la base de datos por el ID en jwt_payload
      // Por ahora, devolvemos un usuario simulado
      if (jwt_payload.id === "mockUserId") {
        return done(null, { id: jwt_payload.id, username: "mockUser" });
      } else {
        return done(null, false);
      }
    })
  );
};
