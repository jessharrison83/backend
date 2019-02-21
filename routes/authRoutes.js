const userDb = require("../models/usersModel")
const storyDb = require("../models/storiesModel")
const bcrypt = require("bcryptjs")

const {
  passwordProtection,
  generateToken,
  checkRegistrationFields,
  loginCheck
} = require("../middleware/middleware")

module.exports = server => {
  server.get("/", home)
  server.post("/register", checkRegistrationFields, register)
  server.post("/login", loginCheck, login)
}

function home(req, res) {
  return res.status(200).json({
    message:
      "Welcome to the Bountiful API! The server is up and running. Refer to the ReadMe for specific endpoints."
  })
}

function register(req, res) {
  const user = req.body
  const hash = bcrypt.hashSync(creds.password, 14) // rounds is 2^X
  user.password = hash
  userDb
    .insert(user)
    .then(id => {
      res.status(201).json(id)
    })
    .catch(err => {
      res.status(500).json({
        message: `Unable to add new account: ${err}`
      })
    })
}

function login(req, res) {
  const cred = req.body

  userDb
    .where({ username: cred.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(cred.password, user.password)) {
        const token = generateToken(user)

        res.status(200).json({ message: "Welcome", token })
      } else {
        res.status(404).json({
          message: "Invalid username or password"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Unable to login"
      })
    })
}
