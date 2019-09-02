const express = require("express"),
  router = express.Router(),
  
  con = require("./lib/dbconn"),
  cors = require("cors");
  router.use(cors());

  router.post("/registeruser", (req, res) => {
    console.log("test")
    var users={
        "name":req.body.name,
        "lastname":req.body.lastname
    }
    con.query('INSERT INTO test SET ?',users, function (error, results, fields){
        if (error) {
            console.log("error ocurred",error);
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          }else{
            console.log('The solution is: ', results);
            res.send({
              "code":200,
              "success":"user registered sucessfully"
                });
          }
        
    })
})
module.exports = router;