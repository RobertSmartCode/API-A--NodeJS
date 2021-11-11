require('dotenv').config();
module.exports.Config = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    mongoDbname: process.env.MONGO_DBNAME
   
}