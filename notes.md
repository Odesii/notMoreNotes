# Notes 

Step-by-Step Tasks for Building the Note Taker Application

## 1. Set Up Your Node.js Environment

    👾 Install Node.js: Ensure Node.js is installed on your machine. You can download it from nodejs.org. 
    👾 Initialize a New Node Project: Run npm init -y in your project directory to create a package.json file.
    👾 Install Express.js: Run npm install express to add Express to your project.

## 2. Create the Express Server

    👾 Set Up Server File: Create a file named server.js.
    👾 Import Express: Add const express = require('express'); at the top of your server.js.
    👾 Initialize Express: Add const app = express(); to create your app object.
    👾 Set Port: Define a port number with const PORT = process.env.PORT || 3000;.
    👾 Start Server: Add app.listen(PORT, () => console.log(Server running on port ${PORT})); to start your server.

## 3. Middlewares

    👾 Body Parser: Add app.use(express.json()); and app.use(express.urlencoded({ extended: true })); to handle JSON and URL-encoded form data.

## 4. Set Up Routes

    HTML Routes:
        👾Notes Page: Add app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));.
        👾Catch-all Route: Add app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));.

    API Routes:
        👾GET Notes: Add a route to fetch notes: app.get('/api/notes', (req, res) => {/* code to read db.json   and return data as JSON */});.
        👾POST Notes: Add a route to create a new note: app.post('/api/notes', (req, res) => {/* code to save new note to db.json */});. -->

## 5. Data Management

    Read and Write to JSON File:
        👾Use Node's fs module to handle file operations.
        👾Reading: Use fs.readFile to read the db.json file when fetching notes.
        👾Writing: Use fs.writeFile to update db.json when saving new notes.

## 6. Unique ID for Notes

    👾 Setup UUID: Add uuid file that can generate unique IDs.
    👾 Use UUID: Import it in your server file and use it when saving a new note to assign a unique ID.

## 7. Bonus: Implement DELETE Route

    DELETE Notes: Add a route to delete a note: app.delete('/api/notes/:id', (req, res) => {/* code to delete note from db.json */});.

## 8. Static Files

    👾Serve Static Files: Use app.use(express.static('public')); to serve the static files located in the public directory.

## 9. Deploy to Render

    Prepare for Deployment:
        Ensure your project structure is correct and all files are properly set up.
        Check environment variables and other configuration settings.
    Deploy: Follow Render's documentation to deploy your Node.js app.

## 10. Test Everything

    Local Testing: Ensure all functionality works as expected locally.
    Deployed App Testing: Test the application once deployed to ensure all parts are functioning correctly in the production environment.