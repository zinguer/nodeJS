const fs = require('fs')

let fileName = process.argv[2]

file = fs.readFile(fileName , function(err , data){
    console.log(data.toString().split('\n').length-1)
})