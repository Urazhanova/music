const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/Users/irinaurazanova/Desktop/music/ИИ в музыке_ создание, аранжировка, кейсы.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => console.error("Error reading PDF:", err));
