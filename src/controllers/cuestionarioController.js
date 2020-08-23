const { connect } = require("../routes");

const controller = {};


controller.list = function (req, res) {
  req.getConnection( function (err, conn) {
    var sql=null;
    var sql2=null;
    var data=null, data_answers=null;
    conn.query('SELECT * FROM questions', function(err,rows,fields){
      data=rows;
      conn.query('SELECT * FROM answers ', function(err, rows, fields) {
         data_answers=rows
        
      res.render('cuestionario',{data: data, data_answers: data_answers});   
      //console.log(data); 

      })
    });
  });
};

controller.check_cuestionario = function (req, res) {
  const data = req.body;
  let result = 0;
  
  //console.log(Object.keys(data));
  //res.send("Preguntas resueltas : " + Object.keys(data).length);
  //res.redirect('/cuestionario');
  
  const cant_selecionada = Object.keys(data).length;
  
  req.getConnection( function (err, conn) {
    conn.query('SELECT ans_id FROM questions', function (err, questions) {
        if (err) {
            res.jeson(err);
        }
        //console.log(competencia);
        else{
                    for (let i = 0; i < questions.length; i++) {
                      const element = questions[i];
                      var respuesta = element.ans_id;
                        for (let j = 0; j < cant_selecionada; j++) {          
                          var checked = Object.values(data)[j];
                          var respuesta_selecionada = checked;
                          if (respuesta == respuesta_selecionada ) {
                              result ++;
                          }
                        }
                        //console.log("La respuestseleccionada es: "+respuesta_selecionada);
                        //console.log("La respuesta es: "+respuesta);
                      }
                      console.log("Resultado, respuestas correctas: "+result);
                      res.send("Preguntas resueltas : " + Object.values(data).length + "<br>Resultado respuestas correctas: "+result);
              }
      });
  });
};


module.exports = controller;