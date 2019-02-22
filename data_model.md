## models

#### USERS
---
```
{
  id: UUID
  username: STRING, unique, max 100 chars
  password: STRING
  email: STRING, unique
  role: STRING [ 'Coordinator', 'Donor' ]
  country: STRING [ 'Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe' ]
  organization_title: STRING
  created_at: DATE & TIME STRING in YYYY-MM-DD [ 0 - 23 ] [HH:MM:SS]
}
```

#### STORIES
---
```
{
  id: UUID
  title: STRING, unique, max 250 chars
  country: STRING [ 'Bolivia', 'Brazil', 'Cambodia', 'Colombia', 'Ecuador', 'El Salvador', 'Ghana', 'Guatemala', 'Haiti', 'Honduras', 'Kiribati', 'Madagascar', 'Mongolia', 'Nicaragua', 'Paraguay', 'Peru', 'Philippines', 'Sierra Leone', 'Zimbabwe' ]
  description: STRING
  updated_at: DATE & TIME STRING in YYYY-MM-DD [ 0 - 23 ] [HH:MM:SS]
  small_image: STRING
  large_image: STRING
  user_id: UUID foreign key in USERS table
}
```


## actions

`fetch(id)` -> Returns user by ID

`fetchCountry(id)` -> Returns user's country by user ID

`register(user)` -> Adds user to the database

`login(username)` -> Authenticates user by username

`update(id, user)` -> Updates user profile by user ID

`remove(id)` -> Removes user by ID

<br>

`fetch()` -> Returns all stories

`fetch(id)` -> Returns story by story ID

`fetchUserStories(userID)` -> Returns all stories by a specific user ID

`add(story)` -> Adds new story

`update(id, story)` -> Updates story by ID

`delete(id)` -> Removes story by ID

<br>

`passwordProtection(password, res)` -> Verifies password is at least 12 characters long and hashes it

`loginCheck()` -> Verifies username and password are on request

`generateToken(username, id, role)` -> Creates JWT token

`authenticate()` -> Retrieves token and verifies the validity of the user

`coordAuth()` -> Verifies user is a Coordinator to grant access to restricted pages

`verifyUser()` -> Verifies the request is to the account of the logged in user only

<br>

`checkRegistrationFields()` -> Verifies all fields are filled properly for user creation or updating

`checkStoryFields()` -> Verifies all fields are filled properly for story creation or updating

`assignIamge(country)` -> Returns small and large image URL for given country

`assignCountry(id, res)` -> Assigns story the same country as the Coordinator creating it

`checkIfUser()` -> Verifies the userID is valid