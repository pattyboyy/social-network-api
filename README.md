# Social Network API

## Description

This project is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, MongoDB as the database, and Mongoose as the ODM (Object Document Mapper).

## Insomnia Tests Video



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:
   ```
   npm install
   ```
4. Ensure MongoDB is installed and running on your machine.
5. Start the server:
   ```
   npm start
   ```

## Usage

After starting the server, you can use an API testing tool like Insomnia to test the various routes. The API allows you to:

- Create, read, update, and delete users
- Add and remove friends for a user
- Create, read, update, and delete thoughts
- Add and remove reactions to thoughts

## API Routes

### User Routes

- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get a single user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:id` - Update a user
- DELETE `/api/users/:id` - Delete a user

### Friend Routes

- POST `/api/users/:userId/friends/:friendId` - Add a friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend

### Thought Routes

- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:id` - Get a single thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:id` - Update a thought
- DELETE `/api/thoughts/:id` - Delete a thought

### Reaction Routes

- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.