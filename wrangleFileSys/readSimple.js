/**
 * Created by ganesh on 22/3/15.
 */
const fs = require('fs');

exports.readFile = function(fileName) {
    fs.readFile(fileName, function (err, data) {
        if (data) {
            console.log("Contents of target.txt are: " + data.toString());
        }
        else {
            throw err;
        }
    });
}

exports.readFile('target.txt');