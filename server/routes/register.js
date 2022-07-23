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
            address
        }
    } = req;
    const extension = extname(file.originalName);
    // console.log("post reg",req.file)
    try {
        if (imageReg.test(file.originalName)) {
            if (imageReg.test(file.detectedFileExtension)) {
                const filename = email + '-' + file.detectedFileExtension;
                await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../../public/images/user/${filename}`));
                res.status(200).send({ success: true });
            }
            else {
                res.status(200).send({ message: `The images you chosen is corrupted and is not valid, Please choose different image file.` });
            }
        } else {
            res.status(200).send({ message: `Please choose an image file. It seems you selected ${extension.replace('.', '')} file.` });
        }
        // let findUserByEmail = await sql.query(`select * from tbladmin where adminemail='${req.body.useremail}'`);
        // let user = findUserByEmail.recordset[0];
        // if (!user) {
        //     res.status(200).json({ message: 'You are not registered with this email.' , success: false });
        // }
        // else {
        //     if (req.body.password === user.adminpassword) {
        //         res.status(200).json({
        //             message: 'login successful.',
        //             success: true,
        //             id: user.adminid,
        //             email: user.adminemail,
        //             gender: user.genderid === 1 ? "Male" : "Female",
        //             name: user.name
        //         });
        //     }
        //     else {
        //         res.status(200).json({ message: 'You entered wrong password.', success: false });
        //     }
        // }
        // res.status(200).json({ message: 'You entered wrong password.', success: false });
    } catch (error) {
        res.status(200).json({ message: 'Something went wrong.', success: false });
        sql.close();
    }

});

module.exports = router;