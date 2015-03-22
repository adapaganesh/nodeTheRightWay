/**
 * Created by ganesh on 22/3/15.
 */
const fs = require('fs'),
    readFile = require('./readSimple').readFile;

fs.writeFile('target.txt', 'Testing fs.writeFile', function(err){
    if(err){
        throw err;
    }
});

console.log('Writing to target.txt');
//readFile('target.txt');
