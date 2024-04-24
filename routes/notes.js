const notes = require('express').Router();
const uuid = require('../helper/uuid');

const {readFromFile, readAndAppend, writeToFile} = require('../helper/fsUtil')

notes.get('/', (req, res) =>{
    console.info(`${req.method} ( ≖.≖) received INFO`);
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});



notes.post('/', (req, res) =>{
    console.info(`${req.method} (⊙.⊙(☉̃ₒ☉)⊙.⊙) received request to add note`);

    const {title, text} = req.body
    if(req.body && req.body.title && req.body.text){
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/notes.json');
        res.json('another note added(҂◡̀_◡́)ᕤ');
    }else{
        res.error('┻━┻ ︵ヽ(`▭´)ﾉ︵﻿ ┻━┻');
    }
});

notes.delete('/:id', (req, res) =>{
    const noteID = req.params.id;

    readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const remove = json.filter( note => note.id !== noteID); 

        writeToFile('./db/notes.json', remove )

        res.json(`THAT SHIT GONE`)
    })
})


module.exports = notes;