# Capstone Book Read-List Project

The Capstone Book Project is a full-stack application demonstrating the integration of PostgreSQL as a database, Node.js with Express for creating APIs, and EJS and CSS for building a web interface. The project is deployed on [Render](https://book-readlist.onrender.com) using Elephant SQL for database hosting.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Full Stack Capability**: Demonstrates the full-stack development using PostgreSQL, Node.js, Express, EJS, and CSS.
- **Book Listing**: Allows users to view a list of books from the PostgreSQL database.
- **API Endpoints**: Provides API endpoints for retrieving book data.

## Installation

To run the Capstone Book Project locally, follow these steps:

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/PacifiedPizza/Book-readlist.git
    ```

2. Install the dependencies.
    ```bash
    cd Book-readlist
    npm install
    ```

3. Create a `.env` file in the project root and configure the PostgreSQL connection URL:
    ```env
    DATABASE_URL=your_postgresql_connection_url
    ```

4. Start the server.
    ```bash
    npm start
    ```

5. Open your web browser and navigate to [http://localhost:3124](http://localhost:3124) to use the Book-readlist application.

## Usage

- Visit the homepage to view a list of books retrieved from the PostgreSQL database.
- Explore the API endpoints for further book data retrieval.

## API Documentation

For detailed API documentation, refer to the [official documentation on Render](https://book-readlist.onrender.com/docs) 

## Live Demo

Check out the live demo of the Capstone Book Project at [Render](https://book-readlist.onrender.com) 

## Contributing

Feel free to contribute to the project. If you have any improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch 
5. Open a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
