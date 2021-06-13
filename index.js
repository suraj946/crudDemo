
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const StudentController = require('./StudentController.js');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(1350);
console.log("app started on port 1350");

app.get("/",  function(req, res){
    res.render('welcome');
});

app.get('/students', StudentController.getStudentList);
app.get('/students/delete',StudentController.deleteStudent);
app.get('/students/create',StudentController.createStudentForm);
app.post('/students/create',StudentController.createStudent);
app.get('/students/edit',StudentController.editStudentForm);
app.post('/students/edit',StudentController.editStudent);








