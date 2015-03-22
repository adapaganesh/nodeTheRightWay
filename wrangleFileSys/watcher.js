/**
 * Created by ganesh on 22/3/15.
 */
const fs = require('fs');

fs.watch('target.txt', function(){
    console.log('target.txt got updated');
});

console.log('Now watching target.txt for changes...');