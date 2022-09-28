const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt' , `Here is the result : ${first} , ${second}`,{ flag : 'a'})
console.log(first,second);

const { readFile ,writeFile} = require('fs');


readFile('./content/first.txt', 'utf8' , (err,result) => {
    if(err) {
        console.log(err);
        return
    } 

    const first = result
    console.log(first)
    readFile('./content/first.txt', 'utf8' , (err,result) => { 
        if(err) {
            console.log(err);
            return
        } 
        const second = result;
    })
})