// ENCRYPT : 

// using jwt we can encrypt our data.
// we encrypt the data using secret key.
// data + key = encrypted text.

import jwt from "jsonwebtoken";

function token() {
    try {
        let userObj = {
            name: "Sneha",
            age: 20,
            isAlive: true
        }
        console.log(userObj);

        // payload, key, time

        let secretKey = "SNEHA"    // take this secret key from config or default.json
        let getToken = jwt.sign(userObj, secretKey, { expiresIn: "1h" })
        console.log(getToken);

    } catch (error) {
        console.log(error);
    }
}
token()