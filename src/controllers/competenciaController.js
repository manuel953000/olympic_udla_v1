const { connect } = require("../routes");

const controller = {};

controller.list = function (req, res) {
    req.getConnection( function (err, conn) {
        conn.query('SELECT * FROM competencia', function (err, competencia) {
            if (err) {
                res.jeson(err);
            }
            //console.log(competencia);
            res.render('competencia', {
                data:competencia
            });
        });
    });
};


controller.save = function (req, res) {
   const data = req.body;
    
   req.getConnection(function (err,  conn) {
       conn.query('INSERT INTO competencia set ?', [data], function (err, competencia) {
           console.log(competencia);
           res.redirect('/competencia');
       });
   });
};


controller.edit = function (req, res) {
    const id = req.params.id;
    req.getConnection(function (err,  conn) {
        conn.query('SELECT * FROM competencia WHERE  id_competencia = ?', [id], function (err, competencia) {
            res.render('customer_edit', {
                data: competencia[0]
            });
        });
    });
};



controller.update = function (req, res) {
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection(function (err, conn) {
        conn.query('UPDATE competencia set ? WHERE id = ?',[newCustomer, id], function (err, rows) {
            res.redirect('/competencia');
        });
    });
};


controller.delete = function (req, res) {
    const id = req.params.id;
    
    req.getConnection(function (err,  conn) {
        conn.query('DELETE FROM competencia WHERE  id_competencia = ?', [id], function (err, competencia) {
            console.log(req.params);
            res.redirect('/competencia');
        });
    });
 };



module.exports = controller;