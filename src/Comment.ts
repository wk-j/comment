import fs from "fs"

var buffer = fs.readFileSync("resource/File.js", "utf8")

var regex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm

var noComment = buffer.match(regex);
console.log(noComment)