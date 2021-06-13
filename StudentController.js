let DBHelper = require('./DBHelper.js');

module.exports = {
    getStudentList: function(req,res) {
        DBHelper.execute('SELECT * from students', function (err, students, fields) {
            if (err) throw err;
            res.render('studentList',{students:students});
        });
    },
    deleteStudent: function(req,res) {
        let id = req.query.id;
        DBHelper.execute('delete from students where id = '+id, function (err, students, fields) {
            if (err) throw err;
            res.redirect('/students');
        });
    },
    createStudentForm: function(req,res) {
        res.render('createStudentForm');
    },
    createStudent: function(req,res) {
        let fname = req.body.firstName;
        let lname = req.body.lastName;
        let address = req.body.address;
        DBHelper.execute(`insert into students values (0,'${fname}','${lname}','${address}')`, function (err, students, fields) {
            if (err) throw err;
            res.redirect('/students');
        });
    },
    editStudentForm: function(req,res) {
        let id = req.query.id;
        DBHelper.execute(`SELECT * from students where id=${id}`, function (err, students, fields) {
            if (err) throw err;
            res.render('editStudentForm',{student:students[0]});
        });
    },

    editStudent: function(req,res) {
        let id = req.body.id;
        let fname = req.body.firstName;
        let lname = req.body.lastName;
        let address = req.body.address;
        DBHelper.execute(`update students set fname = '${fname}', lname='${lname}', address='${address}' where id = ${id}`, function (err, students, fields) {
            if (err) throw err;
            res.redirect('/students');
        });
    }
}