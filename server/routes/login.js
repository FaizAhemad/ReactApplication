const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const sql = require('mssql');


sql.connect(dbConfig)
    .then((a) => console.log(`Connected to ${a.config.database}`))
    .catch(e => {
        console.log(`An error occured: ${e}`)
        sql.close();
    });

router.get('/', (req, res) => {
    res.redirect('/api/login');
});

router.get('/login', async (req, res) => {
    try {
        let result1 = await sql.query('select * from tbladmin');

        //for stored procedure 
        let result2 = await sql.query('selectAllCustomers');
        let result3 = await sql.query('allGenders');


        console.log(result2.recordset);
        return res.status(200).json({ name: 'faiz' });
    } catch (error) {
        console.log(error)
        sql.close();
    }
    finally{
        sql.close();
    } 
          
   


});


module.exports = router;