### API Documentation


#### Authentication Routes

| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| POST   | `/register`                     | all users           | Creates a new user account (donor or coordinator)  |
| POST   | `/login`                        | all users           | Allows a valid user to access the application      |


#### Coordinator Restricted Routes

| Method | Endpoint                        | Access Control      | Description                                        |
|--------|---------------------------------|---------------------|----------------------------------------------------|
| GET    | `/coord/:id/home`               | coordinators        | Returns coordinator's stories                      |
| GET    | `/coord/:id        `            | single coordinator  | Returns coordinator's account information          |
| PUT    | `/coord/:id`                    | single coordinator  | Updates coordinator's account information          |
| DELETE | `/coord/:id`                    | single coordinator  | Deletes coordinator's account                      |


#### Single Story Routes

| Method | Endpoint                        | Access Control        | Description                                      |
|--------|---------------------------------|-----------------------|--------------------------------------------------|
| POST   | `/coord/:id`                    | single coordinator    | Adds new story with coordinator's id             |
| GET    | `/story/:id`                    | coordinators, donors  | Returns story by that story id                   |
| PUT    | `/story/:id`                    | single coordinator    | Coordinator can update the story                 |
| DELETE | `/story/:id`                    | single coordinator    | Deletes the story                                |


#### Donor Routes

| Method | Endpoint                        | Access Control        | Description                                      |
|--------|---------------------------------|-----------------------|--------------------------------------------------|
| GET    | `/donor/home`                   | coordinators, donors  | Returns all stories                              |
| GET    | `/donor/:id`                    | single donor          | Returns donor's account information              |
| PUT    | `/donor/:id`                    | single donor          | Updates donor's account information              |
| DELETE | `/donor/:id`                    | single donor          | Deletes donor's account                          |