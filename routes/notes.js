// pulling in functions and files to use 
const notes = require('express').Router();
const uuid = require('../helper/uuid');
const {readFromFile, readAndAppend, writeToFile} = require('../helper/fsUtil')


// fetches all notes
notes.get('/', (req, res) =>{
    console.info(`${req.method} ( ≖.≖) received INFO`); // Log the request method and custom message
     // Read from the notes file and parse the JSON data then send it as a response
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});
//adds new now to notes db 
notes.post('/', (req, res) =>{
    console.info(`${req.method} (⊙.⊙(☉̃ₒ☉)⊙.⊙) received request to add note`);

    const {title, text} = req.body
    // Check if the required fields are present
    if(req.body && req.body.title && req.body.text){
        const newNote = {
            title,
            text,
            id: uuid(), // Assign a unique ID to the new note
        };
        // Append the new note to the file and respond with a success message
        readAndAppend(newNote, './db/notes.json');
        res.json('another note added(҂◡̀_◡́)ᕤ');
    }else{
        res.error('┻━┻ ︵ヽ(`▭´)ﾉ︵﻿ ┻━┻');
    }
});
// remove a specific note by ID
notes.delete('/:id', (req, res) =>{
    const noteID = req.params.id; // Extract the ID from the request parameters

// Read from the notes file, parse it, filter out the note with the given ID, and write the results back
    readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const remove = json.filter( note => note.id !== noteID); 

        writeToFile('./db/notes.json', remove )

        res.json(`THAT SHIT GONE`)
    })
})


module.exports = notes;