const fs = require("fs");
const path = require("path");

module.exports = function (name, ext, callback) {
  ext = "." + ext;
  fs.readdir(name, function (err, data) {
    if (err) {
      return callback(err);
    }

    let filteredList = [];
    data.forEach(function (file) {
      if (path.extname(file) === ext) {
        filteredList.push(file);
      }
    });

    return callback(null, filteredList);
  });
};
