# My Book App

Welcome to My Book App, a MERN (MongoDB, Express, React, Node.js) stack application that allows you to add, view, edit, and delete books from your personal collection. With an elegant, book-themed user interface, you can easily organize your favorite titles, authors, and genres, making it simple to manage your virtual library.

## Features
- **Add New Books:** Create entries for new books, including their title, author, genre, and cover image.
- **View Your Collection:** Browse all the books you’ve added, displayed as uniform, aesthetically pleasing cards.
- **Edit Book Details:** Update book information directly from the interface, ensuring your records remain accurate.
- **Delete Unwanted Books:** Remove books that you no longer wish to keep in your collection.
- **Search and Filter:** Quickly find books by title or genre with a built-in search bar, making large collections manageable and organized.
- **Demo**
(I'll put gif here when created.)

## Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas via Mongoose
- **Frontend:** React (configured separately but running simultaneously)
- **Styling:** CSS, React Bootstrap components

## Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **MongoDB Atlas** account and connection string (URI).
- **Mongoose** installed as a dependency to interact with MongoDB.

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/my-book-app.git
   cd my-book-app
   ```

2. **Install Dependencies (Backend):**
   In the project’s root directory (where `server.js` resides):
   ```bash
   npm install
   ```
   
   This command installs the required backend dependencies:
   - `express` for the server
   - `mongoose` for MongoDB interactions
   - `cors`, `body-parser` and other supporting packages

3. **Run the Node.js Server:**
   ```bash
   npm start
   ```
   
   By default, this will start the backend server at `http://localhost:4000`.

   You can now interact with the API endpoints (e.g., `GET /api/books`, `POST /api/books`, etc.). If the frontend is configured, open the React app (usually on `http://localhost:3000`) to view and interact with the UI.

## Usage

- **Add Book:** Sends a `POST` request to `http://localhost:4000/api/books` with the book details (title, author, genre, coverImage).
- **View Books:** Makes a `GET` request to `http://localhost:4000/api/books` to retrieve all books, or navigates to the "View Books" page in the UI.
- **Edit or Delete:** Uses `PUT /api/book/:id` or `DELETE /api/book/:id` to modify or remove a book.
- **Search & Filter:** Enter keywords into the search bar on the "View Books" page to filter by title or genre.

## Project Structure

- **server.js**: Contains the Express server setup and all API endpoints.
- **models/**: Mongoose schemas and models (e.g., `bookModel.js`) for the books.

---

**Enjoy organizing your books with My Book App!**
