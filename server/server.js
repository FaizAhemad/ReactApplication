const express = require('express');
const cors = require('cors');
const app = express();
const registerRoute = require('./routes/register');
const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');
const loginroute = require('./routes/login');
const path = require('path');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const { url } = require('inspector');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(jsonParser);
app.use(cors({ allowedHeaders: '*', origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build')));

// middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })
app.use('/api', loginroute);
app.use('/api/register', registerRoute);
app.use('/api/home', homeRoute);
app.use('/api/fetchUser', userRoute);

app.get('/', (req, res) => {
    res.redirect('/api');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));