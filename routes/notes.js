const notes = require('express').Router();
const uuid = require('../helper/uuid');

const {readFromFile, readAndAppend} = require('../helper/fsUtil')

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
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/notes.json');
        res.json('another note added(҂◡̀_◡́)ᕤ');
    }else{
        res.error('┻━┻ ︵ヽ(`▭´)ﾉ︵﻿ ┻━┻');
    }
});

module.exports = notes;