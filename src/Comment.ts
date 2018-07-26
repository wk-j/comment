import fs from "fs"

function findCommentIndexs(buffer: string) {
    var comment = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
    var match: RegExpMatchArray
    var indexs = []

    while ((match = comment.exec(buffer))) {
        var chars = match[0]
        console.log(chars)
        var index = match.index;
        for (var c of chars) {
            indexs.push(index)
            index += 1
        }
    }
    return indexs;
}

function replaceComments(buffer: string) {
    var comment = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
    return buffer.replace(comment, (x) => {
        var len = x.length
        var r = " ".repeat(len)
        return r
    })
}

var buffer = fs.readFileSync("resource/Issue#5.ts", "utf8")
var rs = replaceComments(buffer)
console.log(rs)
// var result = findCommentIndexs(buffer);
