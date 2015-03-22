/**
 * Created by ganesh on 22/3/15.
 */
const fs = require('fs');

var stream = fs.createReadStream('target.txt');

stream.on('data', function(data){
    process.stdout.write('data from target.txt: ' + data);
});

stream.on('error', function(err){
    process.stdout.write('Error: ' + err.message + '\n');
});
