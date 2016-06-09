process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

function readLine() {
    return input_stdin_array[input_currentline++];
}

function ready (callback) {
  return new Promise((resolve) => {
    process.stdin.on('data', function (data) {
        input_stdin += data;
    });

    process.stdin.on('end', function () {
        input_stdin_array = input_stdin.split("\n");
        resolve();
    });
  }).then(() => {
    callback();
  });
}

module.exports.readLine = readLine;
module.exports.ready = ready;
