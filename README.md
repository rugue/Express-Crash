````markdown
# Express Crash Course Project

This is a simple Express.js project that demonstrates how to build a RESTful API for managing posts. It includes routes for creating, reading, updating, and deleting posts, as well as middleware for logging requests, handling errors, and serving static files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/express-crash-course.git
   ```
2. Navigate into the project directory:
   ```sh
   cd express-crash-course
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8080
   ```
2. Start the server in development mode:
   ```sh
   npm run dev
   ```
   Or, start the server in production mode:
   ```sh
   npm start
   ```
3. Open your browser and navigate to `http://localhost:8080`.

## Routes

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post by ID
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post by ID
- `DELETE /api/posts/:id` - Delete a post by ID

## Middleware

- **Logger**: Logs the details of each request to the console.
- **Error Handler**: Handles errors and returns appropriate error messages.
- **Not Found**: Catches and handles 404 errors for undefined routes.

## Environment Variables

- `PORT`: The port on which the server runs. Default is `8080`.

## Project Structure
````

express-crash-course/
├── controllers/
│ └── postControllers.js
├── middleware/
│ ├── error.js
│ ├── logger.js
│ └── notFound.js
├── routes/
│ └── posts.js
├── public/
│ ├── index.html
│ ├── about.html
│ └── js/
│ └── main.js
├── .env
├── package.json
├── server.js
└── README.md

```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
```
