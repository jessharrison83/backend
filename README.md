# **Bountiful**

> Link to [FrontEnd](https://appbountiful.netlify.com/)

> Link to [backend](https://bountiful-backend.herokuapp.com/)

## What is it?

- Bountiful is a story telling platform that allows Coordinators of local charities to share their organization's efforts, and Donors from around the world to support programs.

## Motivation?

- Allow Coordinators of programs to focus on running their charity well, rather than spending time and energy marketing for donations
- Give Donors the ability to find local charities for more direct impact
- Help Donors see the impact of their donations over time with story updates


## How to install and Run?

Bountiful requires you to create your own environmental files and variables to run.

- Fork and clone this repository
- Run the command `yarn install` to install all required dependencies.
- Run `knex migrate:latest` to roll all migrations.
- In the root of the project add a `.env` file with the following variables.
  - JWT_SECRET=[STRING]
    - This will be a jsonwebtoken secret string you generate
- run `yarn server`
- The server will start server side
- To run Jest tests, run `yarn test`
