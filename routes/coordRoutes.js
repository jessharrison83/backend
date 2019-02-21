const userDb = require("../models/usersModel")
const storyDb = require("../models/storiesModel")
const {
  checkIfUser,
  assignCountry,
  checkStoryFields,
  verifyUser /*coordAuth*/,
  /*authenticate*/ checkRegistrationFields
} = require("../middleware/middleware")

module.exports = server => {
  server.get("/coord/:id/home", /*authenticate*/ /*coordAuth*/ home)
  server.get("/coord/:id", /*coordAuth*/ verifyUser, checkIfUser, userProfile)
  server.put(
    "/coord/:id",
    /*coordAuth*/
    verifyUser,
    checkRegistrationFields,
    editUser
  )
  server.delete("/coord/:id", /*coordAuth*/ verifyUser, deleteUser)
  server.get("/story/:id", /*authenticate*/ story)
  server.post(
    "/coord/:id",
    verifyUser,
    coordAuth,
    checkStoryFields,
    checkIfUser,
    addStory
  )
  server.put("/story/:id", verifyUser, coordAuth, checkStoryFields, editStory)
  server.delete("/story/:id", verifyUser, coordAuth, deleteStory)
}

function home(req, res) {
  const { id } = req.params

  storyDb
    .fetchUserStories(id)
    .then(stories => {
      res.json(stories)
    })
    .catch(err => {
      res.status(500).json({
        message: "The stories could not be fetched."
      })
    })
}

function userProfile(req, res) {
  const { id } = req.params
  userDb
    .fetch(id)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      res.status(500).json({
        message: "This user could not be fetched"
      })
    })
}

function editUser(req, res) {
  const { id } = req.params
  const updatedUser = req.body

  userDb
    .fetch(id)
    .then(user => {
      if (user) {
        userDb
          .update(id, updatedUser)
          .then(response => {
            userDb.fetch(id).then(user => {
              res.json(user)
            })
          })
          .catch(err => {
            res.status(500).json({
              message: "There was an error updating this user profile."
            })
          })
      } else {
        res.status(404).json({
          message: "This user does not exist."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error identifying that user."
      })
    })
}

function deleteUser(req, res) {
  const { id } = req.params

  userDb
    .fetch(id)
    .then(user => {
      if (user) {
        const theUser = user

        userDb.remove(id).then(response => {
          if (response) {
            res.status(200).json(theUser)
          } else {
            res.status(500).json({
              message: "There was an error deleting this user."
            })
          }
        })
      } else {
        res.status(404).json({
          message: "This user does not exist."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error identifying that user."
      })
    })
}

function story(req, res) {
  const { id } = req.params

  storyDb
    .fetch(id)
    .then(story => {
      if (story) {
        res.status(200).json(story)
      } else {
        res.status(404).json({
          message: "Invalid story id"
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Unable to find that story."
      })
    })
}

function addStory(req, res) {
  const { id } = req.params
  const story = req.body

  assignCountry(id, res)
    .then(response => {
      const newPost = {
        title: story.title,
        description: story.description,
        country: response.country,
        small_image: response.small_image,
        large_image: response.large_image,
        user_id: id
      }
      storyDb
        .add(newPost)
        .then(story => {
          res.status(201).json(story)
        })
        .catch(err => {
          res.status(500).json({
            message: "Unable to add story."
          })
        })
    })
    .catch(err => {
      res.status(401).json(err)
    })
}

function editStory(req, res) {
  const { id } = req.params
  const updatedStory = req.body

  storyDb
    .update(id, updatedStory)
    .then(success => {
      storyDb.fetch(id).then(story => {
        if (story) {
          res.status(200).json(story)
        } else {
          res.status(404).json({
            message: "Unable to fetch that updated story."
          })
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Unable to update that story."
      })
    })
}

function deleteStory(req, res) {
  const { id } = req.params

  storyDb
    .fetch(id)
    .then(story => {
      if (story) {
        const theStory = story

        storyDb.remove(id).then(response => {
          if (response) {
            res.status(200).json(theStory)
          } else {
            res.status(500).json({
              message: "There was an error deleting this story."
            })
          }
        })
      } else {
        res.status(404).json({
          message: "This story does not exist."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error identifying that story."
      })
    })
}
