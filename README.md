# iNotebook - A Simple Note Taking App

Welcome to iNotebook, a simple and user-friendly note-taking application developed using the MERN (MongoDB, Express, React, Node.js) stack. With iNotebook, users can easily create, update, and delete notes, all within the confines of their individual user accounts. This README file will guide you through the installation process, provide an overview of the application's features, and offer some tips for future development.

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
3. [Usage](#usage)
4. [Future Development](#future-development)
5. [Contributing](#contributing)
6. [License](#license)

## 1. Installation

To run iNotebook on your local machine, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- MongoDB Atlas account or a local MongoDB server.
- Git (optional but recommended for cloning the repository).

### Clone the Repository

```bash
git clone https://github.com/your-username/inotebook.git
cd inotebook
```

### Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```dotenv
PORT=3001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

- `PORT`: The port on which the server will run (default is 3001).
- `MONGODB_URI`: Your MongoDB connection URI.
- `JWT_SECRET`: A secret key for JWT (JSON Web Tokens) authentication.

### Install Dependencies

In the project directory, run:

```bash
npm install
```

### Start the Application

To start the server and the React development server, run:

```bash
npm start
```

The app should now be accessible at `http://localhost:3000` in your web browser.

## 2. Features

iNotebook is designed to be a simple and efficient note-taking app. Here are its main features:

- **User Authentication:** Users can create accounts, log in, and log out securely using JWT authentication.
- **Create Notes:** Authenticated users can create new notes with a title and content.
- **Read Notes:** Users can view their existing notes with ease.
- **Update Notes:** Users can edit and update their notes.
- **Delete Notes:** Users can delete notes they no longer need.
- **Responsive Design:** The app is responsive and works well on various screen sizes.

## 3. Usage

1. **Register or Log In:** If you're a new user, register for an account. If you're an existing user, log in with your credentials.

2. **Create a Note:** Click the "New Note" button to create a new note. Enter a title and content for your note, then click "Save."

3. **View Notes:** Your notes will be displayed on the main dashboard. Click on a note to view its details.

4. **Update a Note:** To edit a note, click the "Edit" button on the note's details page. Make your changes and click "Save."

5. **Delete a Note:** To delete a note, click the "Delete" button on the note's details page. Confirm the deletion when prompted.

6. **Log Out:** Click "Log Out" when you're finished using the app to securely log out of your account.

## 4. Future Development

Here are some ideas for future development and improvements to iNotebook:

- **Folders or Tags:** Allow users to categorize notes into folders or add tags for better organization.
- **Rich Text Editing:** Implement a rich text editor to allow users to format their notes.
- **Collaboration:** Add collaboration features, such as sharing notes with other users.
- **Search Functionality:** Enable users to search for notes based on keywords or content.
- **Dark Mode:** Implement a dark mode for improved usability in low-light environments.

Feel free to contribute to the project and help make these improvements a reality!

## 5. Contributing

If you'd like to contribute to iNotebook, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with clear and concise commit messages.
5. Push your branch to your fork.
6. Create a pull request to the main repository.

Thank you for using iNotebook! If you have any questions, feedback, or issues, please don't hesitate to [contact us](mailto:jawwadumar99@gmail.com). Happy note-taking!
