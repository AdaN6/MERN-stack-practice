// require/import jwt
// create a function (and export it) that will receives the same parameters as a controller function (its a middleware after all)
// it will get the Authorization key in the req.params, with a token that should be sent by the client
// it will use the jwt.verify() method to compare the provided token with the JWT password this server has
// If all is fine, you can destructure the payload of the token, which should be a Mongo document's ID
// append that value to the req and pass onto the next function with next()

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    // req.user = _id
    // next()
    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorised" });
  }
};

module.exports = requireAuth;
