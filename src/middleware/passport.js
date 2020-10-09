import User from "../model/User.js";
import { SECRET } from "../config/index.js";
import passportJwt from "passport-jwt";

const { Strategy, ExtractJwt } = passportJwt;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

export default (passport) => {
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
