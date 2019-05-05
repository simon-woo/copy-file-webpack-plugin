const fs = require("fs");

const copy = function(src, dst) {
  //Read directory
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(path) {
      var _src = src + "/" + path;
      var _dst = dst + "/" + path;
      var readable;
      var writable;
      fs.stat(_src, function(err, st) {
        if (err) {
          throw err;
        }
        if (st.isFile()) {
          readable = fs.createReadStream(_src); //createReadStream
          writable = fs.createWriteStream(_dst); //createWriteStream
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
};

const exists = function(src, dst, callback) {
  //testing whether a file exists under a path
  fs.exists(dst, function(exists) {
    if (exists) {
      //no
      callback(src, dst);
    } else {
      //yes
      fs.mkdir(dst, function() {
        //create directory
        callback(src, dst);
      });
    }
  });
};

module.exports = {
  copy,
  exists
};
