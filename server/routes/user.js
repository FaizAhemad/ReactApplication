const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const sql = require('mssql');

sql.connect(dbConfig)
    .then((a) => console.log(`Connected to ${a.config.database}`))
    .catch(e => {
        console.log(`An error occured in user.js file: ${e}`);
        sql.close();
    });

router.get('/:id', async (req, res) => {
    try {
        let fetchedUserById = await (await sql.query(`select * from tbladmin where adminid = '${req.params.id}'`)).recordset[0];
        if (fetchedUserById) {
            let data = {
                id: fetchedUserById.adminid,
                email: fetchedUserById.adminemail,
                gender: fetchedUserById.genderid === 1 ? "Male" : "Female",
                name: fetchedUserById.name,
            }
            return res.json({ data });
        }
        else {
            return res.status(404).json({ message: 'fetching user failed' });
        }

    } catch (error) {
        sql.close();
    }
});

module.exports = router;