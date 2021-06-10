console.log('inside index.js file');

/*var http = require('http');
http.createServer(function(req,res) {
    res.end('worked');
}).listen(1350);*/



let express = require('express');
let app = express();

app.get('/students',getStudents);
app.get('/teachers',getTeachers);
app.listen(1350);







function getStudents(req,res) {
    console.log('req.url',req.url);
    console.log('req.method',req.method);
    let students = [
        {
            name: 'Ajay',
            roll: 1,
            address: 'Bariyarpur'
        },
        {
            name: 'Sandip',
            roll: 2,
            address: 'Bariyarpur'
        }
    ];
    res.send(students);
}

function getTeachers(req,res) {
    let teachers = [
        {
            name: 'Umesh',
            subject: 'Economics',
            address: 'Bariyarpur'
        },
        {
            name: 'Pandiji',
            subject: 'English',
            address: 'Bariyarpur'
        }
    ];
    res.send(teachers);
}








