import express from "express";
import config from "config";
const app = express()

const PORT = config.get("AGE") || 5000;
console.log(PORT);



// npm install config
// mkdir config and cd config
// touch default.json  {
// "PORT": 5000
//  }
// come back to app.js and use 
// import config from config

// const port = config.get("PORT") || 5000
// console.log(PORT)