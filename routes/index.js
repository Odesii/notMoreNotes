const router = require('exrpress').Router();

const notesRoute =  require('./notes');

router.use('/notes', notesRoute);

module.exports = router;