
const  config = {
    user:  'sa', // sql user
    password:  'Teton2021!', //sql user password
    server:  'DESKTOP-989ILTG', // if it does not work try- localhost
    database:  'shoeMarket',
    options: {
      trustedconnection:  true,
      trustServerCertificate: true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }

  module.exports = config;