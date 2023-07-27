# AgileBoard 🚀

AgileBoard is a Kanban-style project management tool designed to help teams stay organized & track tasks. 📋✅

## Features 🎯

- Drag and drop tasks to move them between different stages of progress.
- Create, edit, and delete tasks with ease.
- Intuitive user interface for a smooth and seamless experience.
- Dark mode for better visibility during late-night work sessions. 🌙

## Local Setup ⚙️

Follow these simple steps to set up AgileBoard on your local machine:

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/agileboard.git
   ```

2. **Install dependencies:**
   ```
   cd agileboard
   npm install
   ```

3. **Create a Firebase project:**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and note down the Firebase configuration (apiKey, authDomain, projectId, etc.).

4. **Add Firebase Config:**
   - Create a `config` folder in the root directory of the project.
   - Inside the `config` folder, create a `firebaseConfig.js` file.
   - Copy the Firebase configuration you obtained earlier into the `firebaseConfig.js` file.

5. **Start the development server:**
   ```
   npm run dev
   ```

6. **Open the app in your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see AgileBoard in action!


## License 📝

AgileBoard is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Thank you for checking out AgileBoard! We hope you find it useful for managing your projects. If you have any questions or need assistance, please don't hesitate to reach out.

Happy task management! 🎉
