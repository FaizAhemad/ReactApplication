const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const sql = require('mssql');

sql.connect(dbConfig)
    .then((a) => console.log(`Connected to ${a.config.database}`))
    .catch(e => {
        console.log(`An error occured in admin.js file: ${e}`);
        sql.close();
    });

// route /api/admin/checkForAdminAccount
router.get('/checkForAdminAccount', async (req, res) => {
    try {
        const checkAdminQuery = await sql.query("select * from tbladmin");
        console.log(checkAdminQuery)
        if (checkAdminQuery.recordset[0].id) {
            return res.status(200).json({ adminFound: true });
        }
        else {
            return res.status(200).json({ adminFound: false });
        }
    } catch (error) {
        return res.status(200).json({ adminFound: false });
    }
});

// route /api/admin/fetchAdminDetails
router.get('/fetchAdminDetails', async (req, res) => {
    try {
        let adminDetailsQuery = await sql.query(`select * from tbladmin`).recordset[0];
    } catch (error) {
        sql.close();
    }
});



module.exports = router;