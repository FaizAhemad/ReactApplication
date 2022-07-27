const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const sql = require('mssql');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { extname } = require('path');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);
const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
const uuid = require('uuidv4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './src/images/user/profile');
//     },
//     filename: (req, file, callBack) => {
//         const extension = extname(file.originalname);
//         if (imageReg.test(file.originalname)) { callBack(null, file.fieldname + '-' + file.originalname) }
//         else {
//             req.res.status(200).send({ message: `Please select an image file. It seems you selected ${extension.replace('.', '')} file.` })
//         }
//     }
// });
// var upload = multer({
//     storage: storage
// });

//multer 2.0.0-rc.1
const upload = multer();
sql.connect(dbConfig)
    .then((a) => console.log(`Connected to ${a.config.database}`))
    .catch(e => {
        console.log(`An error occured in register route: ${e}`);
        sql.close();
    });

router.post('/', upload.single('userImage'), async (req, res) => {
    const {
        file,
        body: {
            firstname,
            middlename,
            lastname,
            email,
            password,
            cpassword,
            day,
            month,
            year,
            gender,
            country,
            state,
            city,
            address,
            mobile
        }
    } = req;
    let hashedPassword = await bcrypt.hash(password, 10);
    const extension = extname(file.originalName);
    try {
        if (imageReg.test(file.originalName)) {
            if (imageReg.test(file.detectedFileExtension)) {
                const filename = email + '-' + file.detectedFileExtension;
                let findUserByEmail = await sql.query(`select * from tblusers where email='${req.body.email}'`);
                let user = findUserByEmail.recordset[0];
                if (user) {
                    res.status(200).json({ message: 'You are already registered with this email.', success: false });
                }
                else {
                    sql.query(`INSERT INTO tblusers (email,password,genderid,firstname, middlename, lastname,
                        fullname,dob,country,state,city,address,mobile,image) VALUES ('${email}','${hashedPassword}','${gender === 'Male' ? 1 : 2}','${firstname}','${middlename}','${lastname}',
                        '${firstname} ${middlename} ${lastname}','${day}-${month}-${year}','${country}','${state}','${city}',
                        '${address}','${mobile}','${file.originalName}')`, async function (err, result) {
                        if (err) throw err;
                        await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../../public/images/user/${filename}`));
                        res.status(200).send({ success: true });
                    });
                }
            }
            else {
                res.status(200).send({ message: `The images you chosen is corrupted and is not valid, Please choose different image file.` });
            }
        } else {
            res.status(200).send({ message: `Please choose an image file. It seems you selected ${extension.replace('.', '')} file.` });
        }
    } catch (error) {
        res.status(200).json({ message: error.toString(), success: false });
        sql.close();
    }
});

module.exports = router;