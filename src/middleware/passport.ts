import User from "../model/User.js";
import { SECRET } from "../config/index.js";
import passportJwt from "passport-jwt";
import { PassportStatic } from "passport";

const { Strategy, ExtractJwt } = passportJwt;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

export default (passport: PassportStatic) => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      await User.findById(payload.userId)
        .then((user) => {
          user ? done(null, user) : done(null, false);
        })
        .catch(() => done(null, false));
    })
  );
};

// for http only cookie system

// import passportJWT from "passport-jwt";
// const JWTStrategy = passportJWT.Strategy;

// import { SECRET } from "../config/index.js";

// const cookieExtractor = (req) => {
//   let jwt = null;

//   if (req && req.cookies) {
//     jwt = req.cookies["jwt"];
//   }

//   return jwt;
// };

// export default (passport) => {
//   passport.use(
//     "jwt",
//     new JWTStrategy(
//       {
//         jwtFromRequest: cookieExtractor,
//         secretOrKey: SECRET,
//       },
//       (jwtPayload, done) => {
//         const { expiration } = jwtPayload;

//         if (Date.now() > expiration) {
//           done("Unauthorized", false);
//         }

//         done(null, jwtPayload);
//       }
//     )
//   );
// };
