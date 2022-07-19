const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const sql = require('mssql');

sql.connect(dbConfig)
    .then((a) => console.log(`Connected to ${a.config.database}`))
    .catch(e => {
        console.log(`An error occured: ${e}`);
        sql.close();
    });

router.get('/', (req, res) => {
    res.redirect('/api/login');
});

router.post('/login', async (req, res) => {
    try {
        let findUserByEmail = await sql.query(`select * from tbladmin where adminemail='${req.body.useremail}'`);
        let user = findUserByEmail.recordset[0];
        if (!user) {
            res.status(404).json({ message: 'You are not registered with this email.' });
        }
        else {
            if (req.body.password === user.adminpassword) {
                res.status(200).json({
                    message: 'login successful.',
                    success: true,
                    id: user.adminid,
                    email: user.adminemail,
                    gender: user.genderid === 1 ? "Male" : "Female",
                    name: user.name
                });
            }
            else {
                res.status(404).json({ message: 'You entered wrong password.', success: false });
            }
        }
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong.', success: false });
        sql.close();
    }
});

router.get('/register', async (req, res) => {
    try {
        let addUser = await sql.query('addUser');
        return res.status(200).json({ success: true });
    } catch (error) {
        sql.close();
    }
});

module.exports = router;