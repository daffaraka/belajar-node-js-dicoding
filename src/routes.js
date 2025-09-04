/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */

const path = require("path");
const { addNoteHandler } = require("./handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
        
    },
    {
        method : 'GET',
        path  '/notes', 
        handler : () => {},
    }
];

module.exports = routes;