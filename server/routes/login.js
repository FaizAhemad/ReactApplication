const express = require('express');

const router = express.Router();
const sql = require('mssql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConfig = require('../dbConfig');
require('dotenv').config();

sql
  .connect(dbConfig)
  .then(a => console.log(`Connected to ${a.config.database}`))
  .catch(e => {
    console.log(`An error occured in login.js: ${e}`);
    sql.close();
  });

router.get('/', (req, res) => {
  res.redirect('/api/login');
});

router.post('/login', async (req, res) => {
  try {
    if (req.body.useremail === 'IAmAdmin') {
      const findUserByEmail = await sql.query(
        `select * from tbladmin where username='${req.body.useremail}'`,
      );
      const user = findUserByEmail.recordset[0];
      if (!user) {
        res
          .status(200)
          .json({message: 'You are not an admin.', success: false});
      } else {
        const comparepassword = await bcrypt.compare(
          req.body.password,
          user.password,
        );
        const token = await jwt.sign({id: user.id}, process.env.jwtSecret, {
          expiresIn: '1h',
        });
        if (req.body.password === user.password) {
          const {
            email,
            id,
            gender,
            username,
            mobile,
            isAdmin,
            firstname,
            middlename,
            lastname,
            fullname,
            dob,
            address,
            image,
          } = user;
          res.status(200).json({
            message: 'Login successful',
            success: true,
            id,
            email,
            gender: gender === 1 ? 'Male' : 'Female',
            username,
            mobile,
            isAdmin,
            firstname,
            middlename,
            lastname,
            fullname,
            dob,
            address,
            image,
            token,
          });
        } else {
          res
            .status(200)
            .json({message: 'You entered wrong password.', success: false});
        }
      }
    } else {
      const findUserByEmail = await sql.query(
        `select * from tblusers where email='${req.body.useremail}'`,
      );
      const user = findUserByEmail.recordset[0];
      if (!user) {
        res.status(200).json({
          message: 'You are not registered with this email.',
          success: false,
        });
      } else {
        const comparepassword = await bcrypt.compare(
          req.body.password,
          user.password,
        );
        const token = await jwt.sign({id: user.id}, process.env.jwtSecret, {
          expiresIn: '1h',
        });
        if (comparepassword) {
          res.status(200).json({
            message: 'Login successful',
            success: true,
            id: user.id,
            email: user.email,
            gender: user.genderid === 1 ? 'Male' : 'Female',
            name: user.fullname,
            token,
          });
        } else {
          res
            .status(200)
            .json({message: 'You entered wrong password.', success: false});
        }
      }
    }
  } catch {
    res.status(200).json({message: 'Something went wrong.', success: false});
    sql.close();
  }
});

module.exports = router;
