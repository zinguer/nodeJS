const mymodule = require('./module')

let name = process.argv[2]
let ext = process.argv[3]


mymodule(name , ext , function(err,data){
    if (err){
        return callback(err);
    }
    data.forEach(function (file) {
        console.log(file)
        
    });
})